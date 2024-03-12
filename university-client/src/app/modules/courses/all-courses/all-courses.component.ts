import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css'],
  providers: [CoursesService]
})
export class AllCoursesComponent implements OnInit {

  courses: Course[];

  constructor(private _service: CoursesService) { }

  ngOnInit(): void {
    this._service.getCourses()
      .then(data => {
        this.courses = data;
        console.log("Courses:", this.courses);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }
}
