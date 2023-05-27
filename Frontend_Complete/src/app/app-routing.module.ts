import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';
import { ResetComponent } from './components/reset/reset.component';
import { BookingreportComponent } from './components/bookingreport/bookingreport.component';
import { BookslotComponent } from './components/bookslot/bookslot.component';
import { FooterComponent } from './components/footer/footer.component';
import { HelpComponent } from './components/help/help.component';
import { NavheaderComponent } from './components/navheader/navheader.component';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component: DashboardComponent,canActivate:[AuthGuard]},
  {path:'reset',component: ResetComponent},
  {path:'bookingreport',component: BookingreportComponent},
  {path:'bookslot',component: BookslotComponent},
  {path:'footer',component: FooterComponent},
  {path:'help',component: HelpComponent},
  {path:'navheader',component: NavheaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
