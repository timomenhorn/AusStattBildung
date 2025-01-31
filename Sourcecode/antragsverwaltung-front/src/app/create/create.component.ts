import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CreatecomponentData} from '../../assets/componentData/createcomponent/createcomponent';
import {AntragsdatenService} from '../services/antragsdaten.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DatastoringService} from '../services/datastoring.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UserdatenService} from '../services/userdaten.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent implements OnInit {

  mainComponentBuildData;

  validationMessages;

  formErrors;

  currentUser: any;

  avaStatus: any;

  bereichsleiter = [];

  enableStatusschaltung = false;

  antragForm = new FormGroup(
    {}
  );

  constructor(private antragsdatenService: AntragsdatenService,
              private userdatenService: UserdatenService,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private snackBar: MatSnackBar,
              private dataStore: DatastoringService,
              private createcomponentData: CreatecomponentData,
              private router: Router) {

  }

  ngOnInit(): void {
    this.mainComponentBuildData = this.createcomponentData.maindata;

    this.currentUser = JSON.parse(sessionStorage.getItem('user'));

    this.initForm();

    this.antragForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.antragForm);
    });

    this.antragForm.controls.projekttitel.valueChanges.subscribe(
      (titel) => {
        if (this.antragForm.controls.projekttitel.valid) {
          this.antragsdatenService.checkIfProjektExistis(titel).subscribe(
            (response) => {
              console.log(response);
            }
          );
        }
      }
    );
  }

  initForm() {
    this.userdatenService.getBereichsleiter().subscribe(
      (response) => {
        response.forEach(
          e => {
            this.bereichsleiter.push({'value': e.username, disabled: false, 'viewValue': e.username});
          }
        );
        this.mainComponentBuildData.find(element => {
          if (element.formControlName === 'bereichsleiter') {
            element.values = this.bereichsleiter;
          }
        });
        this.antragForm = this.fb.group(
          {}
        );
        this.mainComponentBuildData.forEach(
          e => {
            this.antragForm.addControl(
              e.formControlName, new FormControl({value: '', disabled: e.disabled}, Validators.compose(e.validator)
              )
            );
          }
        );
        this.checkIfParams();
      }
    );
  }

  checkIfParams() {
    this.route.params.subscribe(
      (params) => {
        if (params.id) {
          const routePrams = +params['id'];
          this.antragsdatenService.getAntraegById(routePrams).subscribe(
            (response) => {
              this.antragForm.patchValue(response[0]);
              this.disableForm();
            }
          );
        } else {
          this.patchDefaultValues();
        }
      }
    );
    this.setValidatonMesseges();
  }

  disableForm() {
    this.antragForm.disable();
    this.loadAvaStatus();
  }

  loadAvaStatus() {
    let dauer = this.antragForm.controls.projektdauer.value;
    dauer = +dauer;
    let klassifizierung;
    if (dauer <= 20) {
      klassifizierung = 1;
    } else if (dauer <= 200) {
      klassifizierung = 2;
    } else if (dauer > 200) {
      klassifizierung = 3;
    } else {
      klassifizierung = 3;
    }

    this.antragsdatenService.getStatusAccess(klassifizierung).subscribe(
      (response) => {
        const accessInfo = JSON.parse(response);
        if (accessInfo[0].userRoleEdit.length !== 0) {
          accessInfo[0].userRoleEdit.forEach(
            e => {
              if (this.currentUser.role === e) {
                this.antragForm.controls.kommentarFreigabe.enable();
                this.avaStatus = null;
              } else {
                this.antragForm.controls.kommentarFreigabe.disable();
              }
            }
          );
        }
        if (accessInfo[0].userRoleAccept.length !== 0) {
          accessInfo[0].userRoleAccept.forEach(
            e => {
              if (this.currentUser.role === e) {
                this.antragsdatenService.getAvaStatus(this.antragForm.controls.projektstatus.value).subscribe(
                  (status) => {
                    this.avaStatus = status[0].nextStatus,
                      this.enableStatusschaltung = true;
                  }
                );
              } else {
                this.enableStatusschaltung = false;
              }
            }
          );
        }
      }
    );
  }

  patchDefaultValues() {
    this.antragForm.controls.projektstatus.patchValue(0);
    this.antragForm.controls.beantrager.patchValue(this.currentUser.username);
    if (this.antragForm.contains('system') && this.dataStore.selectedAntragsart) {
      this.antragForm.controls.system.patchValue(this.dataStore.selectedAntragsart);
    }
  }

  setValidatonMesseges() {
    this.validationMessages = this.createcomponentData.validationMesseges;
    this.formErrors = this.createcomponentData.formErrors;
    this.logValidationErrors();
  }

  logValidationErrors(group: FormGroup = this.antragForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      } else {
        this.formErrors[key] = '';
        if (abstractControl && !abstractControl.valid &&
          (abstractControl.touched || abstractControl.dirty)) {
          const messages = this.validationMessages[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrors[key] += messages[errorKey] + ' ';
            }
          }
        }
      }
    });
  }

  sendAntraeg() {
    if (this.antragForm.controls.id.value) {
      this.antragsdatenService.putAntrag(this.antragForm.getRawValue()).subscribe(
        (response) => {
          this.snackBar.open('Antrag erfolgreich weitergeschalten!', 'Ok', {
            duration: 1000
          });
          this.router.navigate(['list']);
        }
      );
    } else {
      this.antragsdatenService.postAntrag(this.antragForm.getRawValue()).subscribe(
        (response) => {
          this.snackBar.open('Antrag erfolgreich angelegt!', 'Ok', {
            duration: 1000
          });
          this.router.navigate(['home']);
        }
      );
    }
  }
}
