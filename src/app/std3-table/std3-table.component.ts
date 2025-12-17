import { Component, OnInit } from '@angular/core';
import { Istd } from '../model/std';
import { Std3Service } from '../std3.service';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-std3-table',
  templateUrl: './std3-table.component.html',
  styleUrls: ['./std3-table.component.scss']
})
export class Std3TableComponent implements OnInit {

  stdArr:Istd[]=[]

  constructor(
    private _stdService : Std3Service,
    private _sncackservice : SnackbarService
  ) { }

  ngOnInit(): void {
    this._stdService.fetchAllstd()
    .subscribe(res=>{
      this.stdArr=res
    })
  }


  onRemove(stdId:string){
  let getconfirn=confirm('Are You sure,you want to remove')
  if(getconfirn){
    console.log(stdId);
    this._stdService.removeStd(stdId)
     .subscribe({
      next:res=>{
        console.log(res);
        this._sncackservice.openSnackbar(`The student with id ${res} is removed successfully`)
      },
      error:err=>{
        console.log(err);
        this._sncackservice.openSnackbar('Something went wrong !!!')
      }
     })
  }
  }

  onEdit(std:Istd){
   console.log(std);
   this._stdService.edotObj$.next(std)
  }
}
