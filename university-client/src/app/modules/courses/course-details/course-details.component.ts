import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { Course, learningOptions } from '../models/course.model';
import { User } from '../../users/models/user.model';
import { UserService } from '../../users/users.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
  providers: [CoursesService]
})
export class CourseDetailsComponent implements OnInit {

  @Input() course: Course = new Course();
  // course: Course = new Course();
  user: User;

  constructor(private _service: CoursesService, private _user: UserService) { }

  ngOnInit(): void {
    console.log("Course", this.course);
    this._service.getCourses()
      .then(courses => {
        this.courseData = courses;
        console.log("Courses:", this.courseData);
        this.isZoom();
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }

  courseData: Course[];
  isInstructor: boolean = true;
  optionLearning: string;

  isUpcomingWeek(startDate: Date): boolean {
    var currentDate = new Date();
    var upcomingDate = new Date(currentDate.getTime() + (7 * 24 * 60 * 60 * 1000));
    return startDate.getTime() <= upcomingDate.getTime();
  }
  isZoom() {
    if (this.course?.optionLearning == 0)
      this.optionLearning = "💻"
    else this.optionLearning = "יש לבתיה איקון"
  }
  ABCD(): boolean {
    if (this.course?.lecturerId == 1)
      return true;
    return false;
  }
}