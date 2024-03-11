import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit{

  
  courseData:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    // this.http.get('/University/courses')
    // .subscribe((data: any)=>{
    //   this.courseData =data;
    // });
  }
  startDate: string = "2024-03-10";
  isInstructor: boolean = true;


  isUpcomingWeek(startData: string): boolean {
    //יש כאן משהו
    return true;

  }
}