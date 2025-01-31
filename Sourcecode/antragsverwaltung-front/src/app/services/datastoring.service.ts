import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatastoringService {

  selectedAntragsart: string = null;

  selectedStatus: string = null;

  constructor() {

  }
}
