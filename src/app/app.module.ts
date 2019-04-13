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
import { DragDropModule } from '@angular/cdk/drag-drop';

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
import { AlertComponent } from './components/alert/alert.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { SubReminderComponent } from './components/sub-reminder/sub-reminder.component';
import { SubReminderListComponent } from './components/sub-reminder-list/sub-reminder-list.component';
import { CalendarMarkerComponent } from './components/calendar-marker/calendar-marker.component';
import { CourseStudentsComponent } from './components/course-students/course-students.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { EmailEditorComponent } from './components/email-editor/email-editor.component';
import { HtmlEmailEditorComponent } from './components/html-email-editor/html-email-editor.component';
import { PlainTextEditorComponent } from './components/plain-text-editor/plain-text-editor.component';
import { InputDialogComponent } from './components/common/input-dialog/input-dialog.component';
import { ConfirmDialogComponent } from './components/common/confirm-dialog/confirm-dialog.component';

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
    SignInComponent,
    AlertComponent,
    UserSettingsComponent,
    SubReminderComponent,
    SubReminderListComponent,
    CalendarMarkerComponent,
    CourseStudentsComponent,
    UserManagementComponent,
    EmailEditorComponent,
    HtmlEmailEditorComponent,
    PlainTextEditorComponent,
    InputDialogComponent,
    ConfirmDialogComponent
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
    DragDropModule,
    StoreModule.forRoot(fromStore.reducers),
    EffectsModule.forRoot(fromStore.effects)
  ],
  entryComponents: [
    ConfirmDialogComponent,
    ReminderCreateWidzardComponent,
    NewCourseDialogComponent,
    EmailEditorComponent
  ],
  exports: [],
  providers: [...services, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
