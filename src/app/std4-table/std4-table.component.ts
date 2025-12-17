import { Component, OnInit } from '@angular/core';
import { Istd } from '../model/std';
import { Std4Service } from '../std4.service';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-std4-table',
  templateUrl: './std4-table.component.html',
  styleUrls: ['./std4-table.component.scss']
})
export class Std4TableComponent implements OnInit {

  stdArr:Istd[]=[]

  constructor(
    private _stdservice : Std4Service,
    private _snackservice : SnackbarService
  ) { }

  ngOnInit(): void {
    this._stdservice.fetchAllstd()
    .subscribe(res=>{
      this.stdArr=res
    })
  }

  onEdit(std:Istd){
  console.log(std);
  this._stdservice.editObj$.next(std)
  }

  onRmove(stdId:string){
    let getconfirn=confirm('Are You sure,you want to remove')
  if(getconfirn){
     console.log(stdId);
   this._stdservice.removeStd(stdId)
     .subscribe({
      next:res=>{
        console.log(res);
        this._snackservice.openSnackbar(`The student with id ${res} is removed successfully`)
      },error:err=>{
        console.log(err);
        this._snackservice.openSnackbar('Something went wrong !!!')
      }
     })
  }
  }

}
