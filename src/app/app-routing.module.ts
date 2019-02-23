import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './components/course/course.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CourseOverviewComponent } from './components/course-overview/course-overview.component';
import { AuthGuard } from './guards/auth.guard';
import { MainAppComponent } from './components/main-app/main-app.component';
import { SignInComponent } from './components/signin/signin.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'login', component: SignInComponent },
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
      }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
