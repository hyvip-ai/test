import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreDocument,AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  constructor(private http:HttpClient,private afs:AngularFirestore) { 

   
  }


  getusers(){
  return this.afs.collection('comp_a').valueChanges(); 
  }
  getfarmers(){
  return this.afs.collection('comp_a').doc('Users').collection('Farmers').valueChanges();
  }
  gettraders(){
  return this.afs.collection('comp_a').doc('Users').collection('Traders').valueChanges();

  }
  getbrokers(){
    console.log('asche')
  return this.afs.collection('comp_a').doc('Users').collection('Brokers').valueChanges();

  }
  getscanresults(id:any){
  console.log(id);
    return this.afs.collection('comp_a').doc('Users').collection('scan_data').doc(`${id}`).valueChanges();
  }


}
 