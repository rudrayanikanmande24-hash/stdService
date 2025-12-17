import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { StdService } from '../std.service';
import { NgForm } from '@angular/forms';
import { UuidService } from '../uuid.service';
import { SnackbarService } from '../snackbar.service';
import { Istd } from '../model/std';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {

  @ViewChild('stdForm') stdForm ! : NgForm
  private _stdService = inject(StdService)
  private _uuidSrvice =inject(UuidService)
  private _snackBarService = inject(SnackbarService)
  isEdit:boolean=false
  editObj!:Istd


  constructor() { }

  ngOnInit(): void {
    this._stdService.editObj$
    .subscribe(res=>{
      this.isEdit=true
      console.log('Get Edit Object',res);
      this.editObj = res;  
      this.stdForm.form.patchValue(res)
    })
  }

  onstdAdd(){
    if(this.stdForm.valid){
       let obj={...this.stdForm.value,stdId:this._uuidSrvice.uuid()}
       console.log(obj);
       this.stdForm.reset()
       this._stdService.createStd(obj)
        .subscribe({
          next:res=>{
            console.log(res);
            this._snackBarService.openSnackbar('The Student data Added successfully !!!')
          },
          error:err=>{
            console.log(err);
            this._snackBarService.openSnackbar('Something went wrong !!!')
          }
        })
    }
  }

  onUpdate(){
    if(this.stdForm.valid){
      let UpdateObj={...this.stdForm.value,stdId:this.editObj.stdId}
      console.log(UpdateObj);
       this._stdService.updatStd(UpdateObj)
       .subscribe({
        next:res=>{
          console.log(res);
          this.stdForm.reset()
          this.isEdit=false
          this._snackBarService.openSnackbar(`Student with Id ${UpdateObj.stdId} updated successfully !!!`)
        },
        error:err=>{
          console.log(err);
          this._snackBarService.openSnackbar(err)
        }
       })
    }
  }


}
