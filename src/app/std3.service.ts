import { Injectable } from '@angular/core';
import { Istd } from './model/std';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Std3Service {

  stdArr: Array<Istd> = [
  {
    fname: 'Rohit',
    lname: 'Sharma',
    email: 'rohit@college.com',
    contact: 9001122334,
    stdId: '301'
  },
  {
    fname: 'Neha',
    lname: 'Joshi',
    email: 'neha@college.com',
    contact: 9887766554,
    stdId: '302'
  }
];

edotObj$ : Subject<Istd> = new Subject()

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

  constructor() { }
}
