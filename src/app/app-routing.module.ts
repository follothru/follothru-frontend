import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './components/course/course.component';
import { OverviewComponent } from './components/overview/overview.component';
import { CourseOverviewComponent } from './components/course-overview/course-overview.component';

const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent },
  { path: 'course', component: CourseOverviewComponent },
  { path: 'course/:id', component: CourseComponent },
  { path: 'course/:id/:mode', component: CourseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
