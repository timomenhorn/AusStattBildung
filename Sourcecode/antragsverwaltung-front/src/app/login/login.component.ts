import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Md5} from 'ts-md5/dist/md5';
import {UserdatenService} from '../services/userdaten.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup(
    {}
  );

  constructor(private fb: FormBuilder,
              private snackBar: MatSnackBar,
              private userdatenService: UserdatenService,
              private router: Router) {
  }

  ngOnInit(): void {
    sessionStorage.removeItem('user');
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
        username: ['', {
          validators: [
            Validators.required
          ]
        }],
        password: ['', {
          validators: [
            Validators.required
          ]
        }],
        role: ['']
      }
    );
  }

  checkUser(e) {
    const md5 = new Md5();
    const hashpw = md5.appendStr(this.loginForm.controls.password.value).end();
    if (e) {
      this.userdatenService.getUser(this.loginForm.controls.username.value).subscribe(
        (user) => {
          if (user.length === 1 && user[0].password === hashpw) {
            sessionStorage.setItem('user', JSON.stringify(user[0]));
            this.router.navigate(['/home']);
          } else if (user.length === 1) {
            this.snackBar.open('Kombination als Username und Passwort stimmt nicht überein!', 'Ok', {
              duration: 3000,
            });
          } else if (user.length === 0) {
            this.snackBar.open('Unbekannter Benutzername!', 'Ok', {
              duration: 3000,
            });
          }
        }
      );
    } else {
      this.userdatenService.getUser(this.loginForm.controls.username.value).subscribe(
        (user) => {
          if (user.length !== 0) {
            this.snackBar.open('Username existiert bereits. Bitte loggen sie sich ein!', 'Ok', {
              duration: 3000,
            });
          } else {
            this.loginForm.controls.role.patchValue('mitarbeiter');
            this.loginForm.controls.password.patchValue(hashpw);
            this.userdatenService.postUser(this.loginForm.value).subscribe(
              (response) => {
                sessionStorage.setItem('user', JSON.stringify(response[0]));
                this.router.navigate(['/home']);
              },
            );
          }
        }
      );
    }
  }
}
