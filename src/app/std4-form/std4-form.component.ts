import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Std4Service } from '../std4.service';
import { UuidService } from '../uuid.service';
import { SnackbarService } from '../snackbar.service';
import { Istd } from '../model/std';

@Component({
  selector: 'app-std4-form',
  templateUrl: './std4-form.component.html',
  styleUrls: ['./std4-form.component.scss']
})
export class Std4FormComponent implements OnInit {
  @ViewChild('stdForm') stdForm ! : NgForm
  private _stdservice = inject(Std4Service)
  private _uuidServoce = inject(UuidService)
  private _sncakService = inject(SnackbarService)
  isEdit:boolean=false
  editObj!:Istd
  constructor() { }

  ngOnInit(): void {
    this._stdservice.editObj$
    .subscribe(res=>{
      this.isEdit=true
      console.log('Get Edit Object',res);
      this.editObj=res;
      this.stdForm.form.patchValue(res)
    })
  }

  onstdAdd(){
  if(this.stdForm.valid){
       let obj={...this.stdForm.value,stdId:this._uuidServoce.uuid()}
       console.log(obj);
       this.stdForm.reset()
       this._stdservice.createStd(obj)
          .subscribe({
          next:res=>{
            console.log(res);
            this._sncakService.openSnackbar('The Student data Added successfully !!!')
          },
          error:err=>{
            console.log(err);
            this._sncakService.openSnackbar('Something went wrong !!!')
          }
        })
    }
  }

  onUpdate(){
    if(this.stdForm.valid){
      let updateObj={...this.stdForm.value,stdId:this.editObj.stdId}
      console.log(updateObj);
       this._stdservice.updatStd(updateObj)
       .subscribe({
        next:res=>{
          console.log(res);
          this.stdForm.reset()
          this.isEdit=false
          this._sncakService.openSnackbar(`Student with Id ${updateObj.stdId} updated successfully !!!`)
        },
          error:err=>{
          console.log(err);
          this._sncakService.openSnackbar(err)
        }

       })
    }
  }
}
