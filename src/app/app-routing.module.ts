import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CourseComponent } from './components/course/course.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CourseOverviewComponent } from './components/course-overview/course-overview.component';

const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent },
  { path: 'course', component: CourseOverviewComponent },
  { path: 'course/:id', component: CourseComponent },
  { path: 'course/:id/:mode', component: CourseComponent }
  // { path: 'subjects/:subject/:courseId', component: CourseComponent },
  // { path: 'courses', component: CoursesComponent },
  // { path: 'courses/:courseId', component: CourseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
