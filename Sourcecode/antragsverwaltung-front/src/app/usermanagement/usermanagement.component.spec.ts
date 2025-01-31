import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UsermanagementComponent} from './usermanagement.component';
import {FormArray, ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MatSnackBarModule} from '@angular/material/snack-bar';

describe('UsermanagementComponent', () => {
  let component: UsermanagementComponent;
  let fixture: ComponentFixture<UsermanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsermanagementComponent],
      imports: [ReactiveFormsModule,
        HttpClientTestingModule,
        MatSnackBarModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be initialiced', () => {
    component.initForm();
    expect((<FormArray>this.userForm.get('user')).controls.length).toBeGreaterThan(0);
  });
});
