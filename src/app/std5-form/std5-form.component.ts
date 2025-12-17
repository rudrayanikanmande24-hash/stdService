import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Std5Service } from '../std5.service';
import { UuidService } from '../uuid.service';
import { SnackbarService } from '../snackbar.service';
import { IstdA } from '../model/std';

@Component({
  selector: 'app-std5-form',
  templateUrl: './std5-form.component.html',
  styleUrls: ['./std5-form.component.scss']
})
export class Std5FormComponent implements OnInit {
  @ViewChild('stdForm') stdForm ! : NgForm
  private _stdService = inject(Std5Service)
  private _uuidService = inject(UuidService)
  private _snackService = inject(SnackbarService)
  isEdit:boolean=false
  editObj!:IstdA
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
      let UpdateObj={...this.stdForm.value,stdId:this.editObj.stdId}
      console.log(UpdateObj);
       this._stdService.updatStd(UpdateObj)
       .subscribe({
        next:res=>{
          console.log(res);
          this.stdForm.reset()
          this.isEdit=false
          this._snackService.openSnackbar(`Student with Id ${UpdateObj.stdId} updated successfully !!!`)
        },
        error:err=>{
          console.log(err);
          this._snackService.openSnackbar(err)
        }
       })
    }
  }
  }


