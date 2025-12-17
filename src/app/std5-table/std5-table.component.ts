import { Component, OnInit } from '@angular/core';
import { IstdA } from '../model/std';
import { Std5Service } from '../std5.service';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-std5-table',
  templateUrl: './std5-table.component.html',
  styleUrls: ['./std5-table.component.scss']
})
export class Std5TableComponent implements OnInit {

  stdArr:IstdA[]=[]
  constructor(
    private _stdService : Std5Service,
    private _snackService : SnackbarService
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
   this._stdService.removeStd5(stdId)
     .subscribe({
      next:res=>{
        console.log(res);
        this._snackService.openSnackbar(`The student with id ${res} is removed successfully`)
      },error:err=>{
        console.log(err);
        this._snackService.openSnackbar('Something went wrong !!!')
      }
     })
  } 
  }

  onEdit(std:IstdA){
console.log(std);
 this._stdService.editObj$.next(std)
  }

}
