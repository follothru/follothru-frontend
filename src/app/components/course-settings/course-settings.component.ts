import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

import { CourseService } from 'src/app/services';
import { Unsubscribable } from 'rxjs';

@Component({
  selector: 'app-course-settings',
  templateUrl: './course-settings.component.html',
  styleUrls: ['./course-settings.component.css']
})
export class CourseSettingsComponent implements OnInit, OnDestroy {
  @Input()
  course: any;

  changed = false;
  nameTemp: string;
  descriptionTemp: string;
  endDateTemp: Date;

  private modifyCourseSubscription: Unsubscribable = null;

  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit() {
    this.nameTemp = this.course.name;
    this.descriptionTemp = this.course.description;
    this.endDateTemp = this.course.endDate;
  }

  ngOnDestroy() {
    if (this.modifyCourseSubscription !== null) {
      this.modifyCourseSubscription.unsubscribe();
    }
  }

  onChange() {
    this.changed =
      this.nameTemp !== this.course.name ||
      this.descriptionTemp !== this.course.description ||
      this.endDateTemp !== this.course.endDate;
  }

  onSaveClick() {
    if (this.changed) {
      if (this.modifyCourseSubscription !== null) {
        this.modifyCourseSubscription.unsubscribe();
      }
      this.modifyCourseSubscription = this.courseService
        .modifyCourse(
          this.course.id,
          this.nameTemp,
          this.descriptionTemp,
          this.endDateTemp
        )
        .pipe(
          tap(result => {
            if (result.ieError) {
              return;
            }
            this.course.name = this.nameTemp;
            this.course.description = this.descriptionTemp;
            this.course.endDate = this.endDateTemp;
            this.changed = false;
          })
        )
        .subscribe();
    }
  }
}
