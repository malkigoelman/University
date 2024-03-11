import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit {

  courses:any[]=[];
  constructor(private http:HttpClient){}

  ngOnInit(): void {
    // this.http.get<any>('/University/courses').subscribe((data:any)=>{
    //   this.courses = data;
    //   console.log(this.courses)
    // });
  }
}
