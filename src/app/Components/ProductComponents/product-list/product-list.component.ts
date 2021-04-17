import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDto } from 'src/app/Models/ProductModel/productDto';
import { ProductService } from 'src/app/Services/ProductServices/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productData:ProductDto[];
  dataLoaded:boolean=false;
  constructor(private productService:ProductService,private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getActiveRoute();
  }

  getActiveRoute(){
    this.activedRoute.params.subscribe(route=>{
      if(route["categoryid"]){
        this.getByCategory(route["categoryid"])
      }
      else{
        this.getProduct();
      }
    })
  }

  getProduct(){
    this.productService.getProductList().subscribe(response=>{
      this.productData = response.data
      this.dataLoaded = true
    });
  }
  
  getByCategory(categoryId:number){
    this.productService.getByCategory(categoryId).subscribe(response=>{
      this.productData = response.data
      this.dataLoaded = true
    })
  }
}