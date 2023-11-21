import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';
import { NotfoundpageComponent } from './components/CommonComponent/notfoundpage/notfoundpage.component';

import { AuthGuard } from './services/security/Auth/auth-guard.service';
import { RegisterRequestComponent } from './components/register-request/register-request.component';
import { OrganizationComponent } from './components/organization/organization.component';
import { MainContentComponent } from './components/main-content/main-content.component';

const routes: Routes = [
 // { path: '', canActivate: [AuthGuard], component: MainlayoutComponent, pathMatch: 'full', },
  { path: 'login', component: LoginComponent },
  { path: 'register-request', component: RegisterRequestComponent },
 
  
  //Main Page Route
  { path: '', canActivate: [AuthGuard], component: MainlayoutComponent, data: { title: 'صفحه اصلی' },
    children: [
      { path: '', component: MainContentComponent },
      { path: 'home', component: MainContentComponent },
      { path: 'organization', component: OrganizationComponent },

    ],
  },

  { path: '**', canActivate: [AuthGuard],   component: NotfoundpageComponent },



  // { path: 'login', component: LoginComponent },
  // { path: '', component: MainlayoutComponent, pathMatch: 'full' },
  // { path: 'home', redirectTo: '' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
