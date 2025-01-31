import {Component, Inject, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Location} from '@angular/common';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'antragsverwaltung';
  currentUser: any;
  loginView: boolean;

  constructor(private router: Router, public dialog: MatDialog, private location: Location) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (location.path().includes('/login')) {
          this.loginView = false;
        } else {
          this.loginView = true;
        }
      }
    });
  }

  openDialog(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
    const dialogRef = this.dialog.open(UserinfoDialogComponent, {
      width: '400px',
      data: {user: this.currentUser}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  downloadScreenshot() {
    const data = document.getElementById('capture');
    html2canvas(data).then(canvas => {
      const imgWidth = 208;
      const imgHeight = canvas.height * imgWidth / canvas.width;

      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('screenshot.pdf');
    });
  }
}

@Component({
  selector: 'app-userinfo-dialog',
  template: `
    <div class="row">
      <div class="col-sm-12">
        <h1>
          Userinfo
        </h1>
      </div>
      <div class="col-sm-12">
        <mat-form-field class="col-sm-12" appearance="outline">
          <mat-label>Username</mat-label>
          <input disabled matInput value={{data.user.username}} placeholder="Username">
        </mat-form-field>
      </div>
      <div class="col-sm-12">
        <mat-form-field class="col-sm-12" appearance="outline">
          <mat-label>Passwort</mat-label>
          <input disabled matInput type="password" value={{data.user.password}} placeholder="Passwort">
        </mat-form-field>
      </div>
      <div class="col-sm-12">
        <mat-form-field class="col-sm-12" appearance="outline">
          <mat-label>Rolle</mat-label>
          <input disabled matInput value={{data.user.role}} placeholder="Rolle">
        </mat-form-field>
      </div>
    </div>
  `
})
export class UserinfoDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UserinfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    console.log(this.data);
  }

}
