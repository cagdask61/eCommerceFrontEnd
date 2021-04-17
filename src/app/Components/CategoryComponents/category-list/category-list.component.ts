import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/CategoryModel/category';
import { CategoryService } from 'src/app/Services/CategoryService/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categoriesData:Category[];
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(response=>{
      this.categoriesData = response.data
    })
  }
}
