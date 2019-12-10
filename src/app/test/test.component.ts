import { Component, OnInit } from '@angular/core';
// import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit{
  // products = products;
  products;
  constructor(private cartService: CartService){
    //do stuff
  }
  ngOnInit() {
     this.products = this.cartService.getProducts();
  }

  goToDetails(){
    alert('ok, i am going')
  }


}