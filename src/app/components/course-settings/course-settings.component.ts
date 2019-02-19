import { Component, OnInit, Input } from '@angular/core';

import { CourseService } from 'src/app/services';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-settings',
  templateUrl: './course-settings.component.html',
  styleUrls: ['./course-settings.component.css']
})
export class CourseSettingsComponent implements OnInit {
  @Input()
  course: any;

  changed = false;
  nameTemp: string;
  descriptionTemp: string;
  endDateTemp: Date;

  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit() {
    this.nameTemp = this.course.name;
    this.descriptionTemp = this.course.description;
    this.endDateTemp = this.course.endDate;
  }

  onChange() {
    this.changed =
      this.nameTemp !== this.course.name ||
      this.descriptionTemp !== this.course.description ||
      this.endDateTemp !== this.course.endDate;
  }

  onSaveClick() {
    if (this.changed) {
      this.courseService
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
          })
        )
        .subscribe();
    }
  }
}
