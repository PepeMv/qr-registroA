import { Component, OnInit } from '@angular/core';
//import {Constantes} from '../../../../core/settings/constantes';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  valForm: FormGroup;
  errorMessage;

  constructor(
    public settings: AuthService,
    fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private toast: ToastrService
  ) {

    this.valForm = fb.group({
      'email': [null, Validators.compose([Validators.required])],
      'password': [null, Validators.required],
      'remember': [false]
    });

  }

  submitForm($ev, value: any) {
    $ev.preventDefault();
    for (const c in this.valForm.controls) {
      this.valForm.controls[c].markAsTouched();
      console.log(value.email);

      this.settings.loginUser(value.email,value.password).subscribe(
        data => {console.log(data)
        this.settings.setUser(data[0].usuario);
        this.settings.setToken(data[0].id);
        this.router.navigate(['/home']);
        },error =>{
          this.toast.error('Error de logeo ', 'Error');
          
        }
      );

    }
    // if (this.valForm.valid) {
    //   this.http.post(Constantes.AdminUrl + 'login', value).subscribe(
    //     (response: any) => {
    //       console.log(response);
    //       if (response.success) {
    //         this.settings.setUser(response.user);
    //         this.settings.setMenu(response.menu);
    //         this.settings.setLogIn();
    //         this.router.navigate(['/admin/dashboard']);
    //       }
    //     },
    //     error => {
    //       this.errorMessage = <any>error;
    //       if (this.errorMessage != null) {
    //         //this.toastr.error(this.errorMessage, 'Error!');
    //       }
    //     }
    //   );
    // }
  }

  ngOnInit() { }

}