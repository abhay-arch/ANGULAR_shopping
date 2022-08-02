import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Buyer } from 'src/app/common/buyer';
import { BuyerManagementService } from 'src/app/service/buyer-management.service';


@Component({
  selector: 'app-buyer-form-list',
  templateUrl: './buyer-form-list.component.html',
  styleUrls: ['./buyer-form-list.component.css']
})
export class BuyerFormListComponent implements OnInit {

  buyers : Buyer[]
  formModel : Buyer=new Buyer(0,"",0,"");
  constructor(
    private service :BuyerManagementService,
    private route : Router
  ) { }

  ngOnInit(): void {
    this.listOfProducts()
  }

  listOfProducts(){
    this.service.getAllProducts().subscribe(data => {
      console.log(data)
      this.buyers=data
    })
  }

  onSubmit()
  {
    // this.buyers.push(this.formModel);
    this.service.saveProduct(this.formModel).subscribe(() =>{ this.route.navigateByUrl("/buyerform")})
  }

}
