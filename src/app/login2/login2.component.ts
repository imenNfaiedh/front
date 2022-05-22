import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../basic-authentification.service';
import { HardcodedAuthentificationService } from '../hardcoded-authentification.service';


@Component({
  selector: 'ngx-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component implements OnInit {

  loginForm: FormGroup;

  username = "imen";
  password= "";
  errorMessage= 'identifiants invalides';
  invalidLogin = false;

  constructor(
    private router: Router, 
    private hardcodedAuthentificationService: HardcodedAuthentificationService,
   private basicAuthenticationService: BasicAuthenticationService,
    private formBuilder: FormBuilder ,

  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      
  
  });

  this.basicAuthenticationService.logout();
  }
  handleClick() {
   /* console.log(this.loginForm.value);
   // if (this.username==="ayoub" && this.password==="dummy")
   if (this.hardcodedAuthentificationService.authenticate(this.username, this.password))
   {
     this.invalidLogin = false;
     // this.router.navigate(['welcome']);
     this.router.navigate(['welcome', this.username]);
   }
   else{
     this.invalidLogin = true;
   }*/

 }



 handleBasicAuthLogin(){
 /*  this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
       .subscribe(
         data => {
           console.log(data)
           this.router.navigate(['pages/clients'])
           this.invalidLogin = false      
         },
         error => {
           console.log(error)
           this.invalidLogin = true
         }
       )*/

 }

 handleJWTAuthLogin() {
   console.log(this.loginForm.value);
   this.basicAuthenticationService.executeJWTAuthenticationService(this.loginForm.controls.username.value, 
     this.loginForm.controls.username.value)
       .subscribe(
         data => {
           console.log(data)
           this.router.navigate(['pages'])
           this.invalidLogin = false      
         },
         error => {
           console.log(error)
           this.invalidLogin = true
         }
       )
 }

 

}


