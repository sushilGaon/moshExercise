import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { usernameValidators } from '../common/cutomValidators'
import { from } from 'rxjs';
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
    form = new FormGroup({
      username: new FormControl('',[Validators.required, usernameValidators.canNotContainSpace]),
      password: new FormControl('',Validators.required),
      contact: new FormGroup({
        mobile:new FormControl('',Validators.required)
      }),
    })

    get username(){
      return this.form.get('username');
    }
    get password(){
      return this.form.get('password');
    }
    get mobile(){
      return this.form.get('contact.mobile')
    }
}
