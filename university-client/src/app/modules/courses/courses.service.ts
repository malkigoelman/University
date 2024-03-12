import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Course, learningOptions } from "./models/course.model";
import { Observable } from "rxjs";
import { Category } from "./models/category.model";
import { error } from "console";
import { Lecturer } from "./models/lecturer.model";
import { Router } from "@angular/router";

@Injectable()
export class CoursesService {

    private readonly _path = '/university'

    navigateIfNotLoggedIn(): void {
        if (!sessionStorage.getItem('userToken'))
            this._router.navigate(['/']);
    }

    getCourses(): Promise<Course[]> {
        return new Promise((req, rej) => {
            this._http.get<Course[]>(this._path + "/courses")
                .subscribe({
                    next: (data) => {
                        req(data)
                        console.log('next');
                    }, error: (error) => {
                        rej(error)
                        console.log('error');
                    }
                })
            console.log("!");
        })
    }

    getCourseById(id: number): Observable<Course> {
        return this._http.get<Course>(this._path + `/courses/${id}`)
    }



    addCourse(course: Course): Observable<Course> {
        return this._http.post<Course>(this._path + `/courses`, course)
    }

    editCouse(id: number, course: Course): Observable<Course> {
        return this._http.put<Course>(this._path + `/courses/${id}`, course)
    }

    deleteCourse(course: Course): Promise<Course> {
        return new Promise((res, rej) => {
            this._http.post<Course>("/courses", course)
                .subscribe({ next: (data) => res(data), error: (error) => rej(error) })
        })
    }

    getCategories(): Observable<Category[]> {
        return this._http.get<Category[]>(this._path + `/categories`)
    }

    getLecturers(): Observable<Lecturer[]> {
        return this._http.get<Lecturer[]>(this._path + `/lecturers`)
    }
    constructor(private _http: HttpClient, private _router: Router) { }
}