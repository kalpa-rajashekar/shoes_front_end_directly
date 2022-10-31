import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Shoe } from 'src/app/model/Shoe';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-view-shoes',
  templateUrl: './view-shoes.component.html',
  styleUrls: ['./view-shoes.component.css']
})
export class ViewShoesComponent implements OnInit {
  
  @Input()
  shoe: Shoe;


  @Output()
  shoeDeletedEvent = new EventEmitter();
  
  constructor(private httpClientService: HttpClientService, private router: Router) { }

  ngOnInit(): void {
  }
  deleteShoes() {
    this.httpClientService.deleteShoes(this.shoe.id).subscribe(
      (book) => {
        this.shoeDeletedEvent.emit();
        this.router.navigate(['/shoeusers']);
      }
    );
  }

}
