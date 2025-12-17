import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Std3Service } from '../std3.service';
import { UuidService } from '../uuid.service';
import { SnackbarService } from '../snackbar.service';
import { Istd } from '../model/std';

@Component({
  selector: 'app-std3-form',
  templateUrl: './std3-form.component.html',
  styleUrls: ['./std3-form.component.scss']
})
export class Std3FormComponent implements OnInit {
  @ViewChild('stdForm') stdForm ! : NgForm
  private _stdService = inject(Std3Service)
  private _uuidService = inject(UuidService)
  private _snackService = inject(SnackbarService)
  isEdit:boolean=false
  editObj!:Istd
  
  constructor() { }

  ngOnInit(): void {
    this._stdService.edotObj$
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
    this.stdForm.reset()
    this._stdService.createStd(obj)
    .subscribe({
      next:res=>{
        console.log(res);
        this._snackService.openSnackbar('The Student data Added successfully !!!')
      },
      error:err=>{
        console.log(err);
        this._snackService.openSnackbar('Something went wrong !!!')
      }
    })
   }
  }

  onUpdate(){
    if(this.stdForm.valid){
      let Uobj={...this.stdForm.value,stdId:this.editObj.stdId
      }
      console.log(Uobj);
      this._stdService.updatStd(Uobj)
        .subscribe({
          next:res=>{
            console.log(res);
            this.stdForm.reset()
            this.isEdit=false
            this._snackService.openSnackbar(`Student with Id ${Uobj.stdId} updated successfully !!!`)
          },
          error:err=>{
          console.log(err);
          this._snackService.openSnackbar(err)
        }
        })
    }
  }
}
