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
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
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
import { ReminderComponent } from './components/reminder/reminder.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarMonthComponent } from './components/calendar-month/calendar-month.component';
import { NewCourseDialogComponent } from './components/new-course-dialog/new-course-dialog.component';
import { CourseRemindersComponent } from './components/course-reminders/course-reminders.component';
import { CourseSettingsComponent } from './components/course-settings/course-settings.component';
import { CourseOverviewComponent } from './components/course-overview/course-overview.component';
import { MainAppComponent } from './components/main-app/main-app.component';
import { SignInComponent } from './components/signin/signin.component';

import { AuthGuard } from './guards/auth.guard';

import * as fromStore from './store';

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
    ReminderComponent,
    CalendarComponent,
    CalendarMonthComponent,
    NewCourseDialogComponent,
    CourseRemindersComponent,
    CourseSettingsComponent,
    CourseOverviewComponent,
    MainAppComponent,
    SignInComponent
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
    MatDialogModule,
    StoreModule.forRoot(fromStore.reducers),
    EffectsModule.forRoot(fromStore.effects)
  ],
  entryComponents: [ReminderCreateWidzardComponent, NewCourseDialogComponent],
  exports: [],
  providers: [...services, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
