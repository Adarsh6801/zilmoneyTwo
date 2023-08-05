import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.scss']
})
export class RegistrationformComponent {
  constructor(private fb:FormBuilder){}
  submit:boolean=false;
  registrationForm=this.fb.group({
    firstName:['',[Validators.required,Validators.minLength(5),Validators.maxLength(6)]],
    lastName:['',[Validators.required,Validators.maxLength(10)]],
    age:[null,[Validators.required,Validators.min(17),Validators.max(20)]],
    email:['',[Validators.required,Validators.email]],
    phone:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    city:['',Validators.required],
    gender:['',Validators.required],
    password:['',Validators.required],
    confirmPassword:['',Validators.required]

  })
  // for getting the controls create a get function
  get f(){
    return this.registrationForm.controls;
  }
  onSubmit(){
    this.submit=true;
    console.log(this.registrationForm,'fasdf');
    
  }
}
