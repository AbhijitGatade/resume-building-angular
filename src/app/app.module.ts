import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SigninComponent as AdminSigninComponent } from './admin/signin/signin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenusComponent } from './admin/menus/menus.component';
import { ObjectivesComponent } from './admin/objectives/objectives.component';
import { SkillsComponent } from './admin/skills/skills.component';
import { HobbiesComponent } from './admin/hobbies/hobbies.component';
import { QualificationsComponent } from './admin/qualifications/qualifications.component';
import { TemplatesComponent } from './admin/templates/templates.component';
import { TemplateComponent } from './admin/template/template.component';
import { UsersComponent } from './admin/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    DashboardComponent,
    AdminSigninComponent,
    MenusComponent,
    ObjectivesComponent,
    SkillsComponent,
    HobbiesComponent,
    QualificationsComponent,
    TemplatesComponent,
    TemplateComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
