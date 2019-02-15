import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { CourseService } from '../../services';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses$: Observable<any>;

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courses$ = this.courseService.getCourses();
    this.courses$.subscribe();
  }
}
