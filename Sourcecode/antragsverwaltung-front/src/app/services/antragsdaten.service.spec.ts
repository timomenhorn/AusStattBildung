import { TestBed } from '@angular/core/testing';

import { AntragsdatenService } from './antragsdaten.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MatSnackBarModule} from '@angular/material/snack-bar';

describe('AntragsdatenService', () => {
  let service: AntragsdatenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        MatSnackBarModule]
    });
    service = TestBed.inject(AntragsdatenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
