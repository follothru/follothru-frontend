import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesComponent } from './components/courses/courses.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { OverviewComponent } from './components/overview/overview.component';

import { services } from './services';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    CourseComponent,
    CoursesComponent,
    PageNotFoundComponent,
    OverviewComponent
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, HttpClientModule],
  providers: [...services],
  bootstrap: [AppComponent]
})
export class AppModule {}
