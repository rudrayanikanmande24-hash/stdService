import { Injectable } from '@angular/core';
import { Istd } from './model/std';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Std2Service {

  stdArr:Array<Istd> = [
  {
    fname: 'Amit',
    lname: 'Patil',
    email: 'amit@gmail.com',
    contact: 9876543210,
    stdId: '201'
  },
  {
    fname: 'Sneha',
    lname: 'Kulkarni',
    email: 'sneha@gmail.com',
    contact: 9123456789,
    stdId: '202'
  }
];

editObj$ : Subject<Istd> = new Subject()

  constructor() { }

  fetchAllStd():Observable<Istd[]>{
    return of(this.stdArr)
  }

  creteStd(std:Istd):Observable<Istd>{
   this.stdArr.push(std)
   return of(std)
  }

  updateStud(std:Istd):Observable<Istd>{
   let i = this.stdArr.findIndex(k=>k.stdId === std.stdId)
   this.stdArr[i]=std;
   return of(std)
  }

  removeStd(id:string):Observable<string>{
    let i = this.stdArr.findIndex(r=>r.stdId === id)
    this.stdArr.splice(i,1)
    console.log(this.stdArr);
    return of(id)
  }
}
