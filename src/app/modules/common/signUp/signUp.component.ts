import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.scss'],
})
export class SignUpComponent implements OnInit{
  
    signUpForm: FormGroup;
    constructor(private service:DataService,private router:Router){}
    ngOnInit(){
      if(localStorage.getItem("name") && localStorage.getItem("email") && localStorage.getItem("company") && localStorage.getItem("loggedin")){
     
      console.log("ache sob kichu")
      this.router.navigate([`/home`])
       // this.showlogin = false
    }
    
        this.signUpForm = new FormGroup({
          phone: new FormControl(null,[Validators.required]),
          password: new FormControl(null,[Validators.required]),
          company:new FormControl(null,[Validators.required])
        });
        if(localStorage.getItem('loginmessege')){
          alert(localStorage.getItem('loginmessege'))
          localStorage.removeItem('loginmessege')
        }
    } 
    myadmin:any = null
    mycomp:any= null
    onSubmit(){
      console.log(this.signUpForm.value)
        this.service.getcompany(this.signUpForm.value.company).subscribe(res=>{
          console.log(res)
            this.mycomp = res;
            if(this.mycomp.length==0){
              alert('Wrong Company Name')
            }
            else{
              this.service.getmainadmins(this.signUpForm.value.phone,this.signUpForm.value.company).subscribe(res=>{
                this.myadmin = res
                if(res){
                    if(this.signUpForm.value.password == this.myadmin.password){
                      console.log(this.signUpForm.value.password,this.myadmin.password)
                        console.log('matched')
                        localStorage.setItem('name',this.myadmin.name)
                        localStorage.setItem('email',this.myadmin.email)
                        localStorage.setItem('company',this.signUpForm.value.company)
                        localStorage.setItem('loggedin','true') 
                        this.router.navigate(['/home'])
                          console.log('asche ekhane')
                          setInterval(()=>{
                            location.reload()
                          },1000)


                      }
                      else{
                        alert('Wrong Password')
                      
                      }

                }
                else{
                  alert('Wrong Phone Number')

                }
              })
            }
      })
      
    }
    pass:any = null
    small:any = null
    big:any = null
    passfor(){
      this.pass = document.getElementById('forpassword');
      this.pass.style.display = 'block';
      this.small = document.getElementById('small');
      this.big = document.getElementById('big');
      this.small.style.display = 'none'
      this.big.style.display = 'none'
    }
    chngpasscomp:any = null
    chngpassuser:any = null
    changepassword(){
       console.log(this.signUpForm.value)
        this.service.getcompany(this.signUpForm.value.company).subscribe(res=>{
          console.log(res) 
          this.chngpasscomp = res;
          if(this.chngpasscomp.length==0){
              alert('Wrong Company Name');
          }
          else{
           
             console.log('exist');
              this.service.getmainadmins(this.signUpForm.value.phone,this.signUpForm.value.company).subscribe(res=>{
                  if(res){
                    this.chngpassuser = res;
                    // console.log(res)
                    this.service.updateadminpass(this.signUpForm.value.phone,this.signUpForm.value.password,this.signUpForm.value.company)
                      this.pass = document.getElementById('forpassword');
                      this.pass.style.display = 'none';
                      this.small = document.getElementById('small');
                      this.big = document.getElementById('big');
                      if(window.innerWidth>=660){ 

                      this.big.style.display = 'block' 
                      }
                      else{
                        this.small.style.display = 'block'
                      }
                      
                  }
                  else{
                    alert('Wrong Phone Number');
                  }
              })
          }
       })
    } 
  passtooglevis(){
    console.log("asche")
    var vis = document.getElementById("vis")
    var hid = document.getElementById("hid")
    vis!.style.display = "none";
    hid!.style.display = "block";
    document.getElementById("togpass")!.setAttribute('type','text')

  }
   passtoogle(){
    var vis = document.getElementById("vis")
    var hid = document.getElementById("hid")
    vis!.style.display = "block";
    hid!.style.display = "none";
    document.getElementById("togpass")!.setAttribute('type','password')

  }
   passtooglevis1(){
    console.log("asche")
    var vis = document.getElementById("vis1")
    var hid = document.getElementById("hid1")
    vis!.style.display = "none";
    hid!.style.display = "block";
    document.getElementById("togpass1")!.setAttribute('type','text')

  }
   passtoogle1(){
    var vis = document.getElementById("vis1")
    var hid = document.getElementById("hid1")
    vis!.style.display = "block";
    hid!.style.display = "none";
    document.getElementById("togpass1")!.setAttribute('type','password')

  }
}
