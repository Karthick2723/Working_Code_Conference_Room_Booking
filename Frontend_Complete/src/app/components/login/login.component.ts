import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';
import { ResetPasswordService } from 'src/app/services/reset-password.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';
  public resetPasswordEmail!: string;
  public isValidEmail!: boolean;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private toast: NgToastService,
    private userStore: UserStoreService,
    private resetService: ResetPasswordService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = "fa-eye") : (this.eyeIcon = "fa-eye-slash");
    this.isText ? (this.type = "text") : (this.type = "password");
  }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      //send the obj to database
      this.auth.login(this.loginForm.value)
        .subscribe({
          next: (res) => {
            console.log(res.message);
            this.loginForm.reset();
            this.auth.storeToken(res.accessToken);
            this.auth.storeRefreshToken(res.refreshToken);
            const tokenPayLoad = this.auth.decodedToken();
            this.userStore.setFullNameForStore(tokenPayLoad.name);
            this.userStore.setRoleForStore(tokenPayLoad.role);
            this.toast.success({ detail: "SUCCESS", summary: "Logged In Successfully", duration: 5000 });
            this.router.navigate(['dashboard'])
          },
          error: (err) => {
            this.toast.error({ detail: "Error", summary: "Something went wrong", duration: 5000 });
            console.log(err);
            this.loginForm.reset();
          }
        })
    }
    else {
      //throw the error using toaster and with required fields
      ValidateForm.validateAllFormFields(this.loginForm);
      alert("Your form is invalid")
    }
  }

  checkValidEmail(event: string) {
    const value = event;
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;
    this.isValidEmail = pattern.test(value);
    return this.isValidEmail;
  }

  confirmToSend(){
    if(this.checkValidEmail(this.resetPasswordEmail)){
      console.log(this.resetPasswordEmail);
      //API call to be done

      this.resetService.sendResetPasswordLink(this.resetPasswordEmail)
      .subscribe({
        next:(res)=>{
          this.toast.success({
            detail:'SUCCESS',
            summary:'Reset Email Sent Successfully!',
            duration:5000,
          });
          this.resetPasswordEmail="";
          const buttonRef=document.getElementById("closeBtn");
          buttonRef?.click();
        },
        error:(err)=>{
          this.toast.error({
            detail:'ERROR',
            summary:'Something went wrong!',
            duration:5000,
          })
        }
      })
    }
  }
}
