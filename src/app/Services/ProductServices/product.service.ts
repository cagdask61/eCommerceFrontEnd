import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/Models/listResponseModel';
import { ProductDto } from 'src/app/Models/ProductModel/productDto';
import { ResponseModel } from 'src/app/Models/responseModel';
import { SingleResponseModel } from 'src/app/Models/singleResponseModel';

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

  getProductDetail(productId:number):Observable<SingleResponseModel<ProductDto>>{
    let newUrl = this.url + "getbyproduct/" + productId;
    return this.httpClient.get<SingleResponseModel<ProductDto>>(newUrl);
  }

  productDtoDelete(productId:number):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.url + "productdelete",productId);
  }
}
