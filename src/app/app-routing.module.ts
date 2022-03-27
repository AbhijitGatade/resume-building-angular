import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SigninComponent as AdminSigninComponent } from './admin/signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent as AdminDashboardComponent } from './admin/dashboard/dashboard.component';
import { ObjectivesComponent } from './admin/objectives/objectives.component';
import { HobbiesComponent } from './admin/hobbies/hobbies.component';
import { SkillsComponent } from './admin/skills/skills.component';
import { QualificationsComponent } from './admin/qualifications/qualifications.component';
import { TemplatesComponent } from './admin/templates/templates.component';
import { TemplateComponent } from './admin/template/template.component';
import { UsersComponent } from './admin/users/users.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"signup", component:SignupComponent},
  {path:"signin", component:SigninComponent},
  {path:"admin/signin", component:AdminSigninComponent},
  {path:"admin/dashboard", component:AdminDashboardComponent},
  {path:"admin/objectives", component:ObjectivesComponent},
  {path:"admin/hobbies", component:HobbiesComponent},
  {path:"admin/skills", component:SkillsComponent},
  {path:"admin/qualifications", component:QualificationsComponent},
  {path:"admin/templates", component:TemplatesComponent},
  {path:"admin/template/:id", component:TemplateComponent},
  {path:"admin/users", component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
