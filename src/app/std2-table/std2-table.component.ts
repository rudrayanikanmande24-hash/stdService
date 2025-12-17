import { Component, OnInit } from '@angular/core';
import { Istd } from '../model/std';
import { Std2Service } from '../std2.service';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-std2-table',
  templateUrl: './std2-table.component.html',
  styleUrls: ['./std2-table.component.scss']
})
export class Std2TableComponent implements OnInit {
  stdArr:Istd[]=[]
  constructor(
    private _stdService : Std2Service,
    private _snackBarservice : SnackbarService
  ) { }

  ngOnInit(): void {
    this._stdService.fetchAllStd()
    .subscribe(res=>{
      this.stdArr=res
    })
  }

  onRmove(stdId:string){
 let getconfirm=confirm('Are you sure,you want to reove')
 if(getconfirm){
  console.log(stdId);
  this._stdService.removeStd(stdId)
  .subscribe({
    next:res=>{
      console.log(res);
      this._snackBarservice.openSnackbar(`The student with id ${res} is removed successfully`)
    },
    error:err=>{
      console.log(err);
      this._snackBarservice.openSnackbar(`Something went wrong !!`)
    }
  })
 }
  }

  onEdit(std:Istd){
   console.log(std);
   this._stdService.editObj$.next(std)
  }
}
