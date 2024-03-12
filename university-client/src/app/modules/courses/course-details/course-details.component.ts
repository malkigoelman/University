import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import {   Course, learningOptions } from '../models/course.model';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
  providers: [CoursesService]
})
export class CourseDetailsComponent implements OnInit {

  @Input() course:Course= new Course();
  // course: Course = new Course();


  constructor(private _service: CoursesService) { }

  ngOnInit(): void {
    console.log("Course",this.course);
    this._service.getCourses()
    .then(courses => {
        this.courseData = courses;
        console.log("Courses:", this.courseData);        
     })
    .catch(error => {
        console.error('Error fetching courses:', error);
    });
  }

  courseData: Course[];
  isInstructor: boolean = true;


  isUpcomingWeek(startDate: Date): boolean {

    var currentDate = new Date();
    var upcomingDate = new Date(currentDate.getTime() + (7 * 24 * 60 * 60 * 1000));
    return startDate.getTime() <= upcomingDate.getTime();
  }
}