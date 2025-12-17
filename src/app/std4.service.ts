import { Injectable } from '@angular/core';
import { Istd } from './model/std';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Std4Service {

  stdArr: Array<Istd> = [
  {
    fname: 'Ankit',
    lname: 'Verma',
    email: 'ankit@office.com',
    contact: 9998887776,
    stdId: '401'
  },
  {
    fname: 'Pooja',
    lname: 'Mehta',
    email: 'pooja@office.com',
    contact: 9556644332,
    stdId: '402'
  }
];

editObj$ : Subject<Istd> = new Subject()

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
