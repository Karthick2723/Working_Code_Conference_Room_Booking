import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgToastModule } from 'ng-angular-popup';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { ResetComponent } from './components/reset/reset.component';
import { BookingreportComponent } from './components/bookingreport/bookingreport.component';
import { BookslotComponent } from './components/bookslot/bookslot.component';
import { FooterComponent } from './components/footer/footer.component';
import { HelpComponent } from './components/help/help.component';
import { NavheaderComponent } from './components/navheader/navheader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ResetComponent,
    BookingreportComponent,
    BookslotComponent,
    FooterComponent,
    HelpComponent,
    NavheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
 })
export class AppModule { }
