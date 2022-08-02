import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ManagementServiceService } from 'src/app/service/management-service.service';

@Component({
  selector: 'app-buyer-pro-list',
  templateUrl: './buyer-pro-list.component.html',
  styleUrls: ['./buyer-pro-list.component.css']
})
export class BuyerProListComponent implements OnInit {
  products : Product[]
  constructor(private service :ManagementServiceService) { }

  ngOnInit(): void {
    this.listOfProducts()
  }

  listOfProducts(){
    this.service.getAllProducts().subscribe(data => {
      console.log(data)
      this.products=data
    })
  }

  

}
