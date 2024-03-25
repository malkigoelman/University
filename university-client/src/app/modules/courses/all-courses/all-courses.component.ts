import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { Course } from '../models/course.model';
import { Category } from '../models/category.model';
@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css'],
  providers: [CoursesService]
})
export class AllCoursesComponent implements OnInit {

  courses: Course[];
  filteredCourses: Course[];
  categories: Category[];
  filterName: string = '';
  filterLearningOption: string = '';
  filterCategory: number = 0;

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

      this._service.getCategories().subscribe(data => {
        this.categories = data;
      });
  }

  applyFilters() {
    this.filteredCourses = this.courses.filter(course => {
      let namePass = !this.filterName || course.name.toLowerCase().includes(this.filterName.toLowerCase());
      let learningOptionPass = !this.filterLearningOption || this.filterLearningOption === 'zoom' && course.optionLearning || this.filterLearningOption === 'frontal' && !course.optionLearning;
      let categoryPass = !this.filterCategory || course.categoryId === this.filterCategory;
      return namePass && learningOptionPass && categoryPass;
    });
  }
  isFiltersFilled(): boolean {
    return this.filterName !== '' || this.filterLearningOption !== '' || this.filterCategory !== 0;
}

clearFilters(): void {
    this.filterName = '';
    this.filterLearningOption = '';
    this.filterCategory = 0;
    this.applyFilters();
}


}
