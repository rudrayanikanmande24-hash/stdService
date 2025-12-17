import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Std2Service } from '../std2.service';
import { UuidService } from '../uuid.service';
import { SnackbarService } from '../snackbar.service';
import { Istd } from '../model/std';

@Component({
  selector: 'app-std2-form',
  templateUrl: './std2-form.component.html',
  styleUrls: ['./std2-form.component.scss']
})
export class Std2FormComponent implements OnInit {
@ViewChild('stdForm') stdForm ! : NgForm
private _stdService = inject(Std2Service)
private _uuidService = inject(UuidService)
private _snckBarServoce = inject(SnackbarService)
isEdit:boolean=false
editObj!:Istd
  constructor() { }

  ngOnInit(): void {
    this._stdService.editObj$
    .subscribe(res=>{
      this.isEdit=true
      console.log('Get Edit Object',res);
      this.editObj=res;
      this.stdForm.form.patchValue(res)
    })
  }

  onstdAdd(){
    if(this.stdForm.valid){
      let obj={...this.stdForm.value,stdId:this._uuidService.uuid()}
      console.log(obj);
      this._stdService.creteStd(obj)
      .subscribe({
        next:res=>{
          console.log(res);
          this.stdForm.reset()
          this._snckBarServoce.openSnackbar('The Student data Added successfully !!!')
          },
          error:err=>{
            console.log(err);
            this._snckBarServoce.openSnackbar('Something went wrong !!!0')
          }
      })
      
    }
  }

  onUdpate(){
     if(this.stdForm.valid){
      let updateObj={...this.stdForm.value,stdId:this.editObj.stdId}
      console.log(updateObj);
       this._stdService.updateStud(updateObj)
       .subscribe({
        next:res=>{
          console.log(res);
          this.isEdit=false
          this._snckBarServoce.openSnackbar(`student with id ${updateObj.std} updated successfully !!!`)
        },
        error:err=>{
          console.log(err);
          this._snckBarServoce.openSnackbar(err)
        }
       })
     }
  }
}
