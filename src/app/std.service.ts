import { Injectable } from '@angular/core';
import { Istd } from './model/std';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StdService {

  stdArr:Array<Istd>=[
    {
      fname:'Rudrayani',
      lname:'Kanmande',
      email:'Rudra@123',
      contact:9857473829,
      stdId:'123'
    },{
      fname:'Jhon',
      lname:'Doe',
      email:'Jhon@124',
      contact:9957473829,
      stdId:'124'
    }
  ]

  editObj$  : Subject<Istd> = new Subject

  constructor() { }

  fetchAllstd():Observable<Istd[]>{
   return of(this.stdArr)
  }

  createStd(std:Istd):Observable<Istd>{
    this.stdArr.push(std)
    return of(std)
  }

  updatStd(std:Istd):Observable<Istd>{
    let i = this.stdArr.findIndex(p=>p.stdId === std.stdId)
    this.stdArr[i]=std;

    return of(std)
  }

  removeStd(id:string):Observable<string>{
    let i = this.stdArr.findIndex(p=>p.stdId === id)
    this.stdArr.splice(i,1)
    console.log(this.stdArr);
    return of(id)
  }
}
