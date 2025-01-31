import {Component, OnInit} from '@angular/core';
import {HomecomponentData} from '../../assets/componentData/homecomponent/homecomponent';
import {Router} from '@angular/router';
import {DatastoringService} from '../services/datastoring.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  mainComponentBuildData;
  subComponentBuildData;
  currentUser: any;

  constructor(private router: Router,
              private dataStore: DatastoringService,
              private homecomponentData: HomecomponentData) {
  }

  ngOnInit() {
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
    this.mainComponentBuildData = this.homecomponentData.maindata;
  }

  loadSubComponents(item) {
    if (item.matCardId === 3) {
      this.router.navigate([item.matCardLink]);
    }
    this.subComponentBuildData = this.homecomponentData.subdata[0][item.matCardId];
  }

  loadRoute(item) {
    if (item.link === 'form') {
      this.dataStore.selectedAntragsart = item.value;
      this.dataStore.selectedStatus = null;
    } else {
      this.dataStore.selectedStatus = item.value;
      this.dataStore.selectedAntragsart = null;
    }
    this.router.navigate([item.link]);
  }

  showCard(e) {
    if (e.includes(this.currentUser.role)) {
      return true;
    } else {
      return false;
    }
  }
}
