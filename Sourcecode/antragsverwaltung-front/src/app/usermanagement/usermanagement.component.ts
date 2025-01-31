import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {UserdatenService} from '../services/userdaten.service';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Md5} from 'ts-md5';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.scss']
})
export class UsermanagementComponent implements OnInit, AfterViewChecked {

  roleSelect = [
    {viewValue: 'Admin', value: 'admin'},
    {viewValue: 'Mitarbeiter', value: 'mitarbeiter'},
    {viewValue: 'Bereichsleiter', value: 'bereichsleiter'},
    {viewValue: 'Betriebsleitung', value: 'leitung'},
    {viewValue: 'Erweiterte Betriebsleitung', value: 'erwleitung'}
  ];

  userForm = new FormGroup(
    {}
  );

  userList: any;

  currentUser: any;

  constructor(private fb: FormBuilder, private userdatenService: UserdatenService) {

  }

  ngOnInit(): void {
    this.currentUser = sessionStorage.getItem('user');
    this.loadUser();
  }

  ngAfterViewChecked(): void {
    for (let j = 0; j < (<FormArray>this.userForm.get('user')).length; j++) {
      // this.validate(j);
    }
  }

  loadUser() {
    this.userdatenService.getAllUser().subscribe(
      (response) => {
        this.userList = response;
        this.initForm();
      }
    );
  }

  initForm() {
    this.userForm = this.fb.group({
      user: this.fb.array([])
    });
    this.editusergroup();
  }

  editusergroup() {
    for (let j = 0; j < this.userList.length; j++) {
      this.addUsergroup();
      (<FormArray>this.userForm.get('user')).controls[j].patchValue(this.userList[j]);
    }
  }

  addUsergroup(): void {
    (<FormArray>this.userForm.get('user')).push(this.addUsergroupGroup());
  }

  addUsergroupGroup(): FormGroup {
    return this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
      id: ['', Validators.required]
    });
  }

  removeusergroup(userId: number, group): void {
    (<FormArray>this.userForm.get('user')).removeAt(userId);
    if (group.value.id) {
      this.userdatenService.deleteUser(group.value.id).subscribe(
        (response) => {
          console.log(response);
        }
      );
    }
  }

  saveChanges(id) {
    console.log(this.userForm.get('user'));
    const md5 = new Md5();
    const hashpw = md5.appendStr(this.userForm.get('user').value[id].password).end();
    (<FormArray>this.userForm.get('user')).controls[id].get('password').patchValue(hashpw);
    (<FormArray>this.userForm.get('user')).controls[id].markAsUntouched();
    this.userdatenService.putUser(this.userForm.get('user').value[id]).subscribe(
      (response) => {
        console.log(response);
      }, (error) => {
        this.userdatenService.postUser(this.userForm.get('user').value[id]).subscribe(
          (response) => {
            (<FormArray>this.userForm.get('user')).controls[id].patchValue(JSON.parse(response));
          }
        );
      }
    );
  }
}
