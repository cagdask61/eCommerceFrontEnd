import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDto } from 'src/app/Models/ProductModel/productDto';
import { ProductService } from 'src/app/Services/ProductServices/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {


  productName:string;
  categoryName:string;
  description:string;
  unitPrice:number;
  unitsInStock:number;
  discontinued:boolean;

  productState:string;

  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getActivedRoute();
    this.getProductState();
  }

  getActivedRoute(){
    this.activatedRoute.params.subscribe(route=>{
      if (route["productid"]){
        this.getProductDetail(route["productid"]);
      }
      else{
        console.error("Hata");
      }
    })
  }

  getProductDetail(productId:number){
    this.productService.getProductDetail(productId).subscribe(response=>{
      this.productName = response.data.productName;
      this.description = response.data.description;
      this.categoryName = response.data.categoryName;
      this.unitPrice = response.data.unitPrice;
      this.unitsInStock = response.data.unitsInStock;
      this.discontinued = response.data.discontinued;
    })
  }

  getProductState(){
    if(this.discontinued === true){
      this.productState = "Üretim Durdu";
    }
    else{
      this.productState = "Üretimi devam ediyor.";
    }
  }
}
