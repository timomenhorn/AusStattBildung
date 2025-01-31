import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HomecomponentData} from '../../assets/componentData/homecomponent/homecomponent';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HomeComponent],
      providers: [HomecomponentData]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    localStorage.setItem('user', '\'username\': \'menhorti\', \'password\': \'7c97253d54d440435b2f86497377af4d\', \'role\': \'admin\', \'id\': 1');
    fixture.detectChanges();
  });

  it('should create', () => {
    component.currentUser = localStorage.getItem('user');
    console.log(component.currentUser);
    expect(component).toBeTruthy();
  });
});
