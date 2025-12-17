import { Injectable } from '@angular/core';
import { IstdA } from './model/std';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Std5Service {

  stdArr:Array<IstdA>=[
    {
     fname:'Jhon',
     lname:'Doe',
     email:'jd@gmail.com',
     age:21,
     stdId:'123'
    },{
      fname:'May',
     lname:'Doe',
     email:'md@gmail.com',
     age:25,
     stdId:'124'
    }
  ]

  editObj$ : Subject<IstdA> = new Subject
  
  constructor() { }
  fetchAllstd():Observable<IstdA[]>{
     return of(this.stdArr)
    }

   createStd(std:IstdA):Observable<IstdA>{
       this.stdArr.push(std)
       return of(std)
     } 

     removeStd5(id:string):Observable<string>{
    let i = this.stdArr.findIndex(p=>p.stdId === id)
    this.stdArr.splice(i,1)
    console.log(this.stdArr);
    return of(id)
  }

  updatStd(std:IstdA):Observable<IstdA>{
      let i = this.stdArr.findIndex(p=>p.stdId === std.stdId)
      this.stdArr[i]=std;
  
      return of(std)
    }
}
