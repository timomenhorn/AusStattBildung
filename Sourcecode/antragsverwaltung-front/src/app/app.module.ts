import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {AppComponent, UserinfoDialogComponent} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {SharedModule} from './shared/shared.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {NgModule} from '@angular/core';
import {HomecomponentData} from '../assets/componentData/homecomponent/homecomponent';
import { CreateComponent } from './create/create.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CreatecomponentData} from '../assets/componentData/createcomponent/createcomponent';
import {HttpClientModule} from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import {MatDialogRef} from '@angular/material/dialog';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    CreateComponent,
    ListComponent,
    LoginComponent,
    UsermanagementComponent,
    UserinfoDialogComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    UserinfoDialogComponent
  ],
  providers: [
    HomecomponentData,
    CreatecomponentData,
    {
      provide: MatDialogRef,
      useValue: {}
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
