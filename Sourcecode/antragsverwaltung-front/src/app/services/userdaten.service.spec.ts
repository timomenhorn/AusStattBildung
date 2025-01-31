import {TestBed} from '@angular/core/testing';

import {UserdatenService} from './userdaten.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MatSnackBarModule} from '@angular/material/snack-bar';

describe('UserdatenService', () => {
  let service: UserdatenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        MatSnackBarModule]
    });
    service = TestBed.inject(UserdatenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
