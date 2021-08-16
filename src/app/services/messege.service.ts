import { Injectable } from '@angular/core';
import {AngularFireMessaging} from '@angular/fire/messaging'
@Injectable({
  providedIn: 'root'
})
export class MessegeService {

  constructor(private fmsg:AngularFireMessaging) { }
  requestPerm(){
    this.fmsg.requestToken.subscribe(res=>{
      console.log(res)
    },err=>console.log(err))
  }


}
