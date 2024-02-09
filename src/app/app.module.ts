import { MyTreeViewComponent } from './components/CommonComponent/my-tree-view/my-tree-view.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundpageComponent } from './components/CommonComponent/notfoundpage/notfoundpage.component';
import { RegisterRequestComponent } from './components/register-request/register-request.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatTreeModule } from '@angular/material/tree';
import { MaterialInstanceModule } from './material.instance.module';
import { TinputComponent } from './components/CommonComponent/tinput/tinput.component';
import { OrganizationComponent } from './components/organization/organization.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { ToastrModule } from 'ngx-toastr';
import { ProfileComponent } from './components/profile/profile.component';
   


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MainlayoutComponent,
    LoginComponent,
    NotfoundpageComponent,
    RegisterRequestComponent,
    MyTreeViewComponent,
    TinputComponent,
    OrganizationComponent,
    MainContentComponent,
    ProfileComponent,
  
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCheckboxModule,
    MatInputModule,
    MatTreeModule,
    MaterialInstanceModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    ToastrModule.forRoot(),

     
     
  ],
  providers: [   
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

 