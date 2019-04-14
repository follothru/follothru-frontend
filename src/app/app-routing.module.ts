import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './components/course/course.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CourseOverviewComponent } from './components/course-overview/course-overview.component';
import { AuthGuard } from './guards/auth.guard';
import { MainAppComponent } from './components/main-app/main-app.component';
import { SignInComponent } from './components/signin/signin.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { StudentEnrollComponent } from './components/student-side/student-enroll/student-enroll.component';
import { VerifyEmailComponent } from './components/student-side/verify-email/verify-email.component';

const routes: Routes = [
  { path: 'signin', component: SignInComponent },
  {
    path: '',
    component: MainAppComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      {
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'course',
        component: CourseOverviewComponent
      },
      {
        path: 'course/:id',
        component: CourseComponent
      },
      {
        path: 'course/:id/:mode',
        component: CourseComponent
      },
      {
        path: 'user-management',
        component: UserManagementComponent
      }
    ]
  },
  {
    path: 'settings',
    canActivate: [AuthGuard],
    component: UserSettingsComponent
  },
  { path: 'studentEnroll', component: StudentEnrollComponent },
  { path: 'studentEnroll/verifyEmail', component: VerifyEmailComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
