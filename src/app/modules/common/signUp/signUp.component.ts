import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.scss'],
})
export class SignUpComponent implements OnInit{
    signUpForm: FormGroup;

    ngOnInit(){
        this.signUpForm = new FormGroup({
          name: new FormControl(null),
          entityName: new FormControl(null),
          email: new FormControl(null),
          password: new FormControl(null)
        });
    }

    onSubmit(){
    }
}
