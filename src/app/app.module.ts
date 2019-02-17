import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule
} from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { BsDatepickerModule, TimepickerModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesComponent } from './components/courses/courses.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { OverviewComponent } from './components/overview/overview.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ReminderCreateWidzardComponent } from './components/reminder-create-widzard/reminder-create-widzard.component';
import { ReminderCreateWidzardItemComponent } from './components/reminder-create-widzard-item/reminder-create-widzard-item.component';
import { ReminderComponent } from './components/reminder/reminder.component';

import { services } from './services';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    CourseComponent,
    CoursesComponent,
    PageNotFoundComponent,
    OverviewComponent,
    SpinnerComponent,
    ReminderCreateWidzardComponent,
    ReminderCreateWidzardItemComponent,
    ReminderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  entryComponents: [ReminderCreateWidzardComponent],
  exports: [],
  providers: [...services],
  bootstrap: [AppComponent]
})
export class AppModule {}
