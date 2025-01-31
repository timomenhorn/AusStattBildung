import {AbstractControl, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';

export class CreatecomponentData {


  get maindata(): ({ etc: string; values: ({ disabled: boolean; viewValue: string; value: string } | { disabled: boolean; viewValue: string; value: string } | { disabled: boolean; viewValue: string; value: string })[]; validator: ((control: AbstractControl) => (ValidationErrors | null))[]; formControlName: string; id: string; placeholder: string; btclass: string; fieldtype: string } | { etc: string; values: ({ disabled: boolean; viewValue: string; value: string } | { disabled: boolean; viewValue: string; value: string } | { disabled: boolean; viewValue: string; value: string } | { disabled: boolean; viewValue: string; value: string } | { disabled: boolean; viewValue: string; value: string } | { disabled: boolean; viewValue: string; value: string } | { disabled: boolean; viewValue: string; value: string } | { disabled: boolean; viewValue: string; value: string } | { disabled: boolean; viewValue: string; value: string })[]; validator: ((control: AbstractControl) => (ValidationErrors | null))[]; formControlName: string; id: string; placeholder: string; btclass: string; fieldtype: string } | { etc: string; validator: (((control: AbstractControl) => (ValidationErrors | null)) | ValidatorFn)[]; formControlName: string; disabled: boolean; id: string; placeholder: string; btclass: string; fieldtype: string } | { etc: string; validator: ((control: AbstractControl) => (ValidationErrors | null))[]; formControlName: string; disabled: boolean; id: string; placeholder: string; btclass: string; fieldtype: string } | { etc: string; validator: (((control: AbstractControl) => (ValidationErrors | null)) | ValidatorFn)[]; formControlName: string; disabled: boolean; id: string; placeholder: string; btclass: string; fieldtype: string } | { etc: string; validator: (((control: AbstractControl) => (ValidationErrors | null)) | ValidatorFn)[]; formControlName: string; disabled: boolean; id: string; placeholder: string; btclass: string; fieldtype: string } | { etc: string; values: ({ disabled: boolean; viewValue: string; value: string } | { disabled: boolean; viewValue: string; value: string } | { disabled: boolean; viewValue: string; value: string } | { disabled: boolean; viewValue: string; value: string } | { disabled: boolean; viewValue: string; value: string } | { disabled: boolean; viewValue: string; value: string })[]; validator: ((control: AbstractControl) => (ValidationErrors | null))[]; formControlName: string; id: string; placeholder: string; btclass: string; fieldtype: string } | { etc: string; values: ({ disabled: boolean; viewValue: string; value: number } | { disabled: boolean; viewValue: string; value: number } | { disabled: boolean; viewValue: string; value: number } | { disabled: boolean; viewValue: string; value: number } | { disabled: boolean; viewValue: string; value: number } | { disabled: boolean; viewValue: string; value: number })[]; validator: ((control: AbstractControl) => (ValidationErrors | null))[]; formControlName: string; disabled: boolean; id: string; placeholder: string; btclass: string; fieldtype: string } | { etc: string; validator: (((control: AbstractControl) => (ValidationErrors | null)) | ValidatorFn)[]; formControlName: string; disabled: boolean; id: string; placeholder: string; btclass: string; fieldtype: string } | { etc: string; values: null; validator: ((control: AbstractControl) => (ValidationErrors | null))[]; formControlName: string; id: string; placeholder: string; btclass: string; fieldtype: string } | { etc: string; validator: (((control: AbstractControl) => (ValidationErrors | null)) | ValidatorFn)[]; formControlName: string; disabled: boolean; id: string; placeholder: string; btclass: string; fieldtype: string } | { etc: string; validator: (((control: AbstractControl) => (ValidationErrors | null)) | ValidatorFn)[]; formControlName: string; disabled: boolean; id: string; placeholder: string; btclass: string; fieldtype: string } | { etc: string; validator: (((control: AbstractControl) => (ValidationErrors | null)) | ValidatorFn)[]; formControlName: string; disabled: boolean; id: string; placeholder: string; btclass: string; fieldtype: string } | { etc: string; values: ({ disabled: boolean; viewValue: string; value: string } | { disabled: boolean; viewValue: string; value: string } | { disabled: boolean; viewValue: string; value: string })[]; validator: ((control: AbstractControl) => (ValidationErrors | null))[]; formControlName: string; id: string; placeholder: string; btclass: string; fieldtype: string } | { etc: string; validator: (((control: AbstractControl) => (ValidationErrors | null)) | ValidatorFn)[]; formControlName: string; disabled: boolean; id: string; placeholder: string; btclass: string; fieldtype: string } | { validator: any[]; formControlName: string; id: string })[] {
    return this._maindata;
  }

  get validationMesseges(): { projekttitel: { minlength: string; maxlength: string; required: string }; auftraggeberFirma: { required: string }; beantrager: { required: string }; projektdauer: { minlength: string; maxlength: string; required: string }; kundenfreigabe: { required: string }; angebotsnummer: { minlength: string; maxlength: string; required: string }; beschreibung: { minlength: string; maxlength: string; required: string }; bemi: { minlength: string; maxlength: string; required: string }; system: { required: string }; bereichsleiter: { required: string }; projektart: { required: string }; projektmitarbeiter: { minlength: string; maxlength: string; required: string }; projektstatus: { required: string }; kommentarFreigabe: { minlength: string; maxlength: string; required: string }; projektleiter: { minlength: string; maxlength: string; required: string } } {
    return this._validationMesseges;
  }

  get formErrors(): { projekttitel: string; auftraggeberFirma: string; beantrager: string; projektdauer: string; kundenfreigabe: string; angebotsnummer: string; beschreibung: string; bemi: string; system: string; bereichsleiter: string; projektart: string; projektmitarbeiter: string; projektstatus: string; kommentarFreigabe: string; projektleiter: string } {
    return this._formErrors;
  }

  private _maindata = [
    {
      /*ID für eindeutige Bestimmung des Textfields*/
      'id': '0',
      /*Name des Form Control*/
      'formControlName': 'projektart',
      /*Placeholder für Form Control*/
      'placeholder': 'Projektart(*)',
      /*Bootstrap Klasse*/
      'btclass': 'col-sm-6',
      /*Validator des Form Control*/
      'validator': [Validators.required],
      /*Fieldtype des zu generierenden Elements*/
      'fieldtype': 'dropdown',
      /*Values des Dropdowns*/
      'values': [
        /*value: Value der Dropdown Option, disabled: Boolean ob Option auswählbar sein soll, viewValue: Anzuzeigende Value*/
        {value: 'externKunde', disabled: false, viewValue: 'Externes Projekt(Kunde)'},
        {value: 'intern', disabled: false, viewValue: 'Internes Projekt'},
        {value: 'extern', disabled: false, viewValue: 'Externes Projekt'}
      ],
      /*Sonstige Optionen*/
      'etc': ''
    },
    {
      'id': '1',
      'formControlName': 'system',
      'placeholder': 'System(*)',
      'btclass': 'col-sm-6',
      'validator': [Validators.required],
      'fieldtype': 'dropdown',
      'values': [
        {value: 'access', disabled: false, viewValue: 'Microsoft Access'},
        {value: 'allgemein', disabled: false, viewValue: 'Allgemein'},
        {value: 'bo', disabled: false, viewValue: 'Business Objects'},
        {value: 'innovationsteam', disabled: false, viewValue: 'Innovationsteam'},
        {value: 'integral', disabled: false, viewValue: 'INTEGRAL'},
        {value: 'kommunikation', disabled: false, viewValue: 'Kommunikation/Schulungen'},
        {value: 'mainframe', disabled: false, viewValue: 'Mainframe Development'},
        {value: 'marketing', disabled: false, viewValue: 'Marketing'},
        {value: 'sharepoint', disabled: false, viewValue: 'Sharepoint'}
      ],
      'etc': ''
    },
    {
      'id': '2',
      'disabled': false,
      'formControlName': 'projekttitel',
      'placeholder': 'Projekttitel(*)',
      'btclass': 'col-sm-6',
      'validator': [Validators.required, Validators.minLength(3), Validators.maxLength(30)],
      'fieldtype': 'textfield',
      'etc': ''
    }, {
      'id': '3',
      'disabled': true,
      'formControlName': 'beantrager',
      'placeholder': 'Beantrager(*)',
      'btclass': 'col-sm-6',
      'validator': [Validators.required],
      'fieldtype': 'textfield',
      'etc': ''
    },
    {
      'id': '14',
      'disabled': false,
      'formControlName': 'projektdauer',
      'placeholder': 'Geplante Projektdauer in Stunden(*)',
      'btclass': 'col-sm-6',
      'validator': [Validators.required, Validators.minLength(1), Validators.maxLength(4)],
      'fieldtype': 'textfield',
      'etc': ''
    },
    {
      'id': '4',
      'disabled': false,
      'formControlName': 'beschreibung',
      'placeholder': 'Beschreibung zum Projekt(*)',
      'btclass': 'col-sm-12',
      'validator': [Validators.required, Validators.minLength(20), Validators.maxLength(250)],
      'fieldtype': 'textarea',
      'etc': ''
    },
    {
      'id': '5',
      'formControlName': 'auftraggeberFirma',
      'placeholder': 'Auftraggeber Firma(*)',
      'btclass': 'col-sm-6',
      'validator': [Validators.required],
      'fieldtype': 'dropdown',
      'values': [
        {value: 'kunde1', disabled: false, viewValue: 'Kunde 1'},
        {value: 'kunde2', disabled: false, viewValue: 'Kunde 2'},
        {value: 'kunde3', disabled: false, viewValue: 'Kunde 3'},
        {value: 'kunde4', disabled: false, viewValue: 'Kunde 4'},
        {value: 'kunde5', disabled: false, viewValue: 'Kunde 5'},
        {value: 'kunde6', disabled: false, viewValue: 'Kunde 6'}
      ],
      'etc': ''
    },
    {
      'id': '6',
      'disabled': true,
      'formControlName': 'projektstatus',
      'placeholder': 'Projektstatus(*)',
      'btclass': 'col-sm-6',
      'validator': [Validators.required],
      'fieldtype': 'dropdown',
      'values': [
        {value: 0, disabled: false, viewValue: 'Anfrage'},
        {value: 1, disabled: false, viewValue: 'Wartet auf Beauftragung'},
        {value: 2, disabled: false, viewValue: 'In Bearbeitung'},
        {value: 3, disabled: false, viewValue: 'In Abnahme'},
        {value: 4, disabled: false, viewValue: 'Abgeschlossen'},
        {value: 5, disabled: false, viewValue: 'Zurückgestellt'}
      ],
      'etc': ''
    }, {
      'id': '7',
      'disabled': false,
      'formControlName': 'projektleiter',
      'placeholder': 'Projektleiter(*)',
      'btclass': 'col-sm-6',
      'validator': [Validators.required, Validators.minLength(10), Validators.maxLength(30)],
      'fieldtype': 'textfield',
      'etc': ''
    },
    {
      'id': '14',
      'formControlName': 'bereichsleiter',
      'placeholder': 'Bereichsleiter(*)',
      'btclass': 'col-sm-6',
      'validator': [Validators.required],
      'fieldtype': 'dropdown',
      'values': null,
      'etc': ''
    }, {
      'id': '8',
      'disabled': false,
      'formControlName': 'projektmitarbeiter',
      'placeholder': 'Projektmitarbeiter(*)',
      'btclass': 'col-sm-6',
      'validator': [Validators.required, Validators.minLength(10), Validators.maxLength(30)],
      'fieldtype': 'textfield',
      'etc': ''
    }, {
      'id': '9',
      'disabled': false,
      'formControlName': 'angebotsnummer',
      'placeholder': 'Angebotsnummer(*)',
      'btclass': 'col-sm-6',
      'validator': [Validators.required, Validators.minLength(5), Validators.maxLength(6)],
      'fieldtype': 'textfield',
      'etc': ''
    }, {
      'id': '10',
      'disabled': false,
      'formControlName': 'bemi',
      'placeholder': 'BEMI-Nummer(*)',
      'btclass': 'col-sm-6',
      'validator': [Validators.required, Validators.minLength(5), Validators.maxLength(6)],
      'fieldtype': 'textfield',
      'etc': ''
    }, {
      'id': '11',
      'formControlName': 'kundenfreigabe',
      'placeholder': 'Kundenfreigabe(*)',
      'btclass': 'col-sm-6',
      'validator': [Validators.required],
      'fieldtype': 'dropdown',
      'values': [
        {value: '0', disabled: false, viewValue: 'Freigegeben'},
        {value: '1', disabled: false, viewValue: 'Zurückgestellt'},
        {value: '2', disabled: false, viewValue: 'Verworfen'}
      ],
      'etc': ''
    }, {
      'id': '12',
      'disabled': true,
      'formControlName': 'kommentarFreigabe',
      'placeholder': 'Kommentar zur Freigabe',
      'btclass': 'col-sm-12',
      'validator': [Validators.required, Validators.minLength(20), Validators.maxLength(250)],
      'fieldtype': 'textarea',
      'etc': ''
    }, {
      'id': '13',
      'formControlName': 'id',
      'validator': [],
    }
  ];

  private _validationMesseges = {
    'projektart': {
      'required': 'Bitte wählen sie eine Projektart aus!'
    },
    'system': {
      'required': 'Bitte wählen sie ein System aus!'
    },
    'projekttitel': {
      'required': 'Der Projekttitel muss mindestens 3 Zeichen lang sein!',
      'minlength': 'Der Projekttitel muss mindestens 3 Zeichen lang sein!',
      'maxlength': 'Der Projekttitel darf maximal 30 Zeichen lang sein!'
    },
    'beantrager': {
      'required': 'Bitte melden Sie sich erneut an. Beim Login ist etwas schiefgelaufen!'
    },
    'beschreibung': {
      'required': 'Die Beschreibung muss mindestens 20 Zeichen lang sein!',
      'minlength': 'Die Beschreibung muss mindestens 20 Zeichen lang sein!',
      'maxlength': 'Der Beschreibung darf maximal 250 Zeichen lang sein!'
    },
    'auftraggeberFirma': {
      'required': 'Bitte geben sie die Firma des Auftraggebers ein!'
    },
    'projektstatus': {
      'required': 'Bitte geben sie den Projektstatus an!'
    },
    'projektleiter': {
      'required': 'Der Name des Projektleiters muss mindestens 10 Zeichen lang sein!',
      'minlength': 'Der Name des Projektleiters muss mindestens 10 Zeichen lang sein!',
      'maxlength': 'Der Name des Projektleiters darf maximal 30 Zeichen lang sein!'
    },
    'projektmitarbeiter': {
      'required': 'Der Name des Projektmitarbeiters muss mindestens 10 Zeichen lang sein!',
      'minlength': 'Der Name des Projektmitarbeiters muss mindestens 10 Zeichen lang sein!',
      'maxlength': 'Der Name des Projektmitarbeiters darf maximal 30 Zeichen lang sein!'
    },
    'angebotsnummer': {
      'required': 'Die Angebotsnummer hat mindestens 5 Zeichen!',
      'minlength': 'Die Angebotsnummer hat mindestens 5 Zeichen!',
      'maxlength': 'Die Angebotsnummer hat maximal 6 Zeichen!'
    },
    'bemi': {
      'required': 'Die BEMI-Nummer hat mindestens 5 Zeichen!',
      'minlength': 'Die BEMI-Nummer hat mindestens 5 Zeichen!',
      'maxlength': 'Die BEMI-Nummer hat maximal 6 Zeichen!'
    },
    'kundenfreigabe': {
      'required': 'Bitte geben sie die Kundenfreigabe an!'
    },
    'kommentarFreigabe': {
      'required': 'Der Kommentar zur Freigabe muss mindestens 20 Zeichen lang sein!',
      'minlength': 'Der Kommentar zur Freigabe muss mindestens 20 Zeichen lang sein!',
      'maxlength': 'Der Kommentar zur Freigabe darf maximal 250 Zeichen lang sein!'
    },
    'projektdauer': {
      'required': 'Bitte geben sie die geplante Projektdauer an!',
      'minlength': 'Bitte geben sie die geplante Projektdauer an!',
      'maxlength': 'Die geplante Projektdauer übersteigt unsere Mittel!'
    },
    'bereichsleiter': {
      'required': 'Bitte geben sie den Bereichsleiter an!',

    }
  };

  private _formErrors = {
    'projektart': '',
    'system': '',
    'projekttitel': '',
    'beantrager': '',
    'beschreibung': '',
    'auftraggeberFirma': '',
    'projektstatus': '',
    'projektleiter': '',
    'projektmitarbeiter': '',
    'angebotsnummer': '',
    'bemi': '',
    'kundenfreigabe': '',
    'kommentarFreigabe': '',
    'projektdauer': '',
    'bereichsleiter': ''
  };
}

