import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shoe } from '../model/Shoe';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-shopshoes',
  templateUrl: './shopshoes.component.html',
  styleUrls: ['./shopshoes.component.css']
})
export class ShopshoesComponent implements OnInit {

  shoes: Array<Shoe>;
  shoeRecieved: Array<Shoe>;
  cartShoes:any
  constructor(private router: Router, private httpClientService: HttpClientService) { }


  ngOnInit() {
    this.httpClientService.getShoes().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
     //from localstorage retrieve the cart item
     let data = localStorage.getItem('cart');
     //if this is not null convert it to JSON else initialize it as empty
     if (data !== null) {
       this.cartShoes = JSON.parse(data);
     } else {
       this.cartShoes = [];
     }
  }

  // we will be taking the books response returned from the database
  // and we will be adding the retrieved   
  handleSuccessfulResponse(response) {
    this.shoes = new Array<Shoe>();
    //get shoes returned by the api call
    this.shoeRecieved = response;
    for (const shoe of this.shoeRecieved) {

      const withshoeRetrievedImageField = new Shoe();
      withshoeRetrievedImageField.id = shoe.id;
      withshoeRetrievedImageField.name = shoe.name;
      //populate retrieved image field so that book image can be displayed
      withshoeRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + shoe.picByte;
      
      withshoeRetrievedImageField.price = shoe.price;
      withshoeRetrievedImageField.picByte = shoe.picByte;
      this.shoes.push(withshoeRetrievedImageField);
    }
  }
  addToCart(shoId) {
    //retrieve book from books array using the book id
    let sho = this.shoes.find(Shoe => {
      return sho.id === +shoId;
    });
    let cartData = [];
    //retrieve cart data from localstorage
    let data = localStorage.getItem('cart');
    //prse it to json 
    if (data !== null) {
      cartData = JSON.parse(data);
    }
    // add the selected book to cart data
    cartData.push(sho);
    //updated the cartBooks
    this.updateCartData(cartData);
    //save the updated cart data in localstorage
    localStorage.setItem('cart', JSON.stringify(cartData));
    //make the isAdded field of the book added to cart as true
    sho.isAdded = true;
  }

  updateCartData(cartData) {
    this.cartShoes = cartData;
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  emptyCart() {
    this.cartShoes = [];
    localStorage.clear();
  }

}



