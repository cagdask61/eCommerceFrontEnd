import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/Models/CategoryModel/category';
import { ListResponseModel } from 'src/app/Models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = "https://localhost:44332/commerce/categories/";
  constructor(private httpClient:HttpClient) { }


  getCategories():Observable<ListResponseModel<Category>>{
    let newUrl = this.url + "getall";
    return this.httpClient.get<ListResponseModel<Category>>(newUrl);
  }

  
}
