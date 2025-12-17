import { Component, OnInit } from '@angular/core';
import { Istd } from '../model/std';
import { StdService } from '../std.service';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss']
})
export class StdTableComponent implements OnInit {

  stdArr:Istd[]=[]


  constructor(
    private _stdservice : StdService,
    private _snackBarService : SnackbarService
  ) { }

  ngOnInit(): void {
    this._stdservice.fetchAllstd()
     .subscribe(res=>{
      this.stdArr=res
     })
  }

  onRmove(stdId:string){
  let getconfirn=confirm('Are You sure,you want to remove')
  if(getconfirn){
     console.log(stdId);
   this._stdservice.removeStd(stdId)
     .subscribe({
      next:res=>{
        console.log(res);
        this._snackBarService.openSnackbar(`The student with id ${res} is removed successfully`)
      },error:err=>{
        console.log(err);
        this._snackBarService.openSnackbar('Something went wrong !!!')
      }
     })
  }
  }

  onEdit(std:Istd){
   console.log(std);
   this._stdservice.editObj$.next(std)
  }

}
