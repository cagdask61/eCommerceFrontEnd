import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/Models/listResponseModel';
import { ProductDto } from 'src/app/Models/ProductModel/productDto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  url = "https://localhost:44332/commerce/products/";

  constructor(private httpClient:HttpClient) { }

  getProductList():Observable<ListResponseModel<ProductDto>>{
    let newUrl = this.url + "getall";
    return this.httpClient.get<ListResponseModel<ProductDto>>(newUrl);
  }

  getByCategory(categoryId:number):Observable<ListResponseModel<ProductDto>>{
    let newUrl = this.url + "getbycategory/" + categoryId;
    return this.httpClient.get<ListResponseModel<ProductDto>>(newUrl);
  }
}
