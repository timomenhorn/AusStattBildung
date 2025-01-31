import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateComponent} from './create.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {CreatecomponentData} from '../../assets/componentData/createcomponent/createcomponent';
import {AntragsdatenService} from '../services/antragsdaten.service';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;
  let antragsdatenService: AntragsdatenService;
  let createcomponentData: CreatecomponentData;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        MatSnackBarModule,
        RouterModule.forRoot([]),
        ReactiveFormsModule],
      declarations: [CreateComponent],
      providers: [CreatecomponentData, AntragsdatenService]
    })
      .compileComponents();
    antragsdatenService = TestBed.inject(AntragsdatenService);
    createcomponentData = TestBed.inject(CreatecomponentData);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form controls', () => {
    component.initForm();
    expect(component.antragForm.controls).toBeDefined();
  });

  it('Should be valid if Form Fileds are filled', () => {
    component.ngOnInit();
    component.antragForm.controls['projektart'].patchValue('externKunde');
    component.antragForm.controls['system'].patchValue('access');
    component.antragForm.controls['projekttitel'].patchValue('ZAx');
    component.antragForm.controls['beantrager'].patchValue('Timo Menhorn(IEW/23)');
    component.antragForm.controls['projektdauer'].patchValue(200);
    // tslint:disable-next-line:max-line-length
    component.antragForm.controls['beschreibung'].patchValue('Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut l');
    component.antragForm.controls['auftraggeberFirma'].patchValue('kunde1');
    component.antragForm.controls['projektstatus'].patchValue(0);
    component.antragForm.controls['projektleiter'].patchValue('Timo Menhorn(IEW/23)');
    component.antragForm.controls['bereichsleiter'].patchValue('test2');
    component.antragForm.controls['projektmitarbeiter'].patchValue('Timo Menhorn(IEW/23)');
    component.antragForm.controls['angebotsnummer'].patchValue(54321);
    component.antragForm.controls['bemi'].patchValue(54321);
    component.antragForm.controls['kundenfreigabe'].patchValue('0');
    component.antragForm.controls['kommentarFreigabe'].patchValue('');

    fixture.detectChanges();
    expect(component.antragForm.valid).toBeTruthy();
  });

});
