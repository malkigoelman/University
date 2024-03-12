import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Course, learningOptions } from "./models/course.model";
import { Observable } from "rxjs";
import { Category } from "./models/category.model";
import { error } from "console";

@Injectable()
export class CoursesService {
    // private _courses: Course[] = [
    //     {
    //         id: 1, name: "C#", categoryId: 1, numberLessons: 50, dateStart: new Date("2024-02-02"),
    //         optionLearning: learningOptions.FRONTAL, lectureId: 1, image: "",cilibus:['mnmn']
    //     },
    //     {
    //         id: 2, name: "Math", categoryId: 1, numberLessons: 50, dateStart: new Date("2024-02-01"),
    //         optionLearning: learningOptions.FRONTAL, lectureId: 1, image: "",cilibus:['ngh']
    //     }
    // ];
    private readonly _path = '/university'
    private _categories: Category[] = [

        { id: 1, name: "Camputers", icon: "" },
        { id: 2, name: "Math", icon: "" },
        { id: 3, name: "English", icon: "" },
        { id: 4, name: "Gym", icon: "" },
        { id: 5, name: "History", icon: "" }
    ];

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

    getCourseById(id: number): Promise<Course> {
        return new Promise((res, rej) => {
            this._http.get<Course>(`/courses/${id}`)
                .subscribe({ next: (data) => res(data), error: (error) => rej(error) })
        })
    }

    getCategories(): Promise<Category[]> {
        return new Promise((resolve, reject) => {
            this._http.get<Category[]>('/id')
                .subscribe({
                    next: (data) => resolve(data),
                    error: (error) => reject(error)
                });
        });
    }

    addCourse(course: Course): Promise<Course> {
        return new Promise((res, rej) => {
            this._http.post<Course>("/courses", course)
                .subscribe({ next: (data) => res(data), error: (error) => rej(error) })
        })
    }

    editCouse(id: number, course: Course): Promise<Course> {
        return new Promise((res, rej) => {
            this._http.put<Course>(`/courses${id}`, course)
                .subscribe({ next: (data) => res(data), error: (error) => rej(error) })
        })
    }

    deleteCourse(course: Course): Promise<Course> {
        return new Promise((res, rej) => {
            this._http.post<Course>("/courses", course)
                .subscribe({ next: (data) => res(data), error: (error) => rej(error) })
        })
    }

    constructor(private _http: HttpClient) { }
}