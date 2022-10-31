import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Shoe } from 'src/app/model/Shoe';
import { HttpClientService } from 'src/app/service/http-client.service';
@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {
  
  shoes: Array<Shoe>;
  shoesRecieved: Array<Shoe>;
  action: string;
  selectedShoes: Shoe;
  
  constructor(private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router) { }

    ngOnInit() {
      this.refreshData();
    }
  
    refreshData() {
      this.httpClientService.getShoes().subscribe(
        response => this.handleSuccessfulResponse(response)
      );
      this.activedRoute.queryParams.subscribe(
        (params) => {
          // get the url parameter named action. this can either be add or view.
          this.action = params['action'];
    // get the parameter id. this will be the id of the book whose details 
    // are to be displayed when action is view.
    const id = params['id'];
    // if id exists, convert it to integer and then retrive the book from
    // the books array
          if (id) {
            this.selectedShoes = this.shoes.find(shoes => {
              return shoes.id === +id;
            });
          }
        }
      );
    }
  
    // we will be taking the books response returned from the database
    // and we will be adding the retrieved
  

  handleSuccessfulResponse(response) {
    this.shoes = response;
    for (const sho of this.shoesRecieved) {
    
      const shoewithRetrievedImageField = new Shoe();
      shoewithRetrievedImageField.id = sho.id;
      shoewithRetrievedImageField.name = sho.name;
      //populate retrieved image field so that shoe image can be displayed
      shoewithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' +sho.picByte;
     
      shoewithRetrievedImageField.price = sho.price;
      shoewithRetrievedImageField.picByte=sho.picByte;
      this.shoes.push(shoewithRetrievedImageField);
  }
  }
  addShoes() {
    this.selectedShoes = new Shoe();
    this.router.navigate(['/shoeusers'], { queryParams: { action: 'add' } });
  }
  viewShoes(id: number) {
    this.router.navigate(['/shoeusers'], { queryParams: { id, action: 'view' } });
  }
  

}
