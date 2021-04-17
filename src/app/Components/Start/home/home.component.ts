import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // numberActive:string;
  // value:string;
  // success:boolean=false;
  constructor() { }

  ngOnInit(): void {
    // this.getactive();
  }

  // getactive(){
  //   var result = Math.floor(Math.random() * 99999);
  //   this.numberActive = result.toString();
  // }

  // getChecked(){
  //   if(this.numberActive === this.value){
  //     console.log("Giriş başarılı ve girilen sayı"+this.value);
  //     this.success = true;
  //   }
  //   else{
  //     console.log("hata");
  //     this.success = false;
  //   }
  // }
}
