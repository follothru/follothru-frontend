import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CourseComponent } from './components/course/course.component';
import { OverviewComponent } from './components/overview/overview.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: OverviewComponent },
  { path: 'course/:id', component: CourseComponent },
  { path: '**', component: PageNotFoundComponent }
  // { path: 'subjects/:subject/:courseId', component: CourseComponent },
  // { path: 'courses', component: CoursesComponent },
  // { path: 'courses/:courseId', component: CourseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
