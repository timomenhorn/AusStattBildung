import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {AntragsdatenService} from '../services/antragsdaten.service';
import {Router} from '@angular/router';
import {DatastoringService} from '../services/datastoring.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns: string[] = ['projektart', 'system', 'projekttitel', 'projektstatus', 'projektdauer', 'details', 'delete'];
  dataSource: any;
  currentUser: any;

  constructor(private router: Router,
              private datastoringService: DatastoringService,
              private dataService: AntragsdatenService) {

  }

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
    this.getAntraegeByUser();
    this.dataSource.sort = this.sort;
  }

  doFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  redirectToDetails(id) {
    this.router.navigate(['form', id]);
  }

  deleteAntrag(id) {
    this.dataService.deleteAntrag(id).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

  getAntraegeByUser() {
    if (this.currentUser.role === 'mitarbeiter' && this.datastoringService.selectedStatus === 'alle') {
      this.dataService.getAntraegeByUsername(this.currentUser.username).subscribe(
        (response) => {
          this.dataSource = new MatTableDataSource<any>(response);
          this.dataSource.sort = this.sort;

        }
      );
    } else if (this.currentUser.role === 'mitarbeiter' && this.datastoringService.selectedStatus) {
      this.dataService.getAntraegeByUsernameStatus(this.currentUser.username, this.datastoringService.selectedAntragsart).subscribe(
        (response) => {
          this.dataSource = new MatTableDataSource<any>(response);
          this.dataSource.sort = this.sort;

        }
      );
    } else if (this.datastoringService.selectedStatus === 'alle') {
      this.dataService.getAllAntraege().subscribe(
        (response) => {
          this.dataSource = new MatTableDataSource<any>(response);
          this.dataSource.sort = this.sort;

        }
      );
    } else if (this.datastoringService.selectedStatus) {
      this.dataService.getAntraegeByStatus(this.datastoringService.selectedStatus).subscribe(
        (response) => {
          this.dataSource = new MatTableDataSource<any>(response);
          this.dataSource.sort = this.sort;

        }
      );
    }
  }
}
