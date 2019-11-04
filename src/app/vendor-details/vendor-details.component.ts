import { Component, OnInit } from '@angular/core';
import { VendorContactService } from '../vendor-contact.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit {
  vnId: number;
  vendor : Vendor;

  constructor(private route:ActivatedRoute,private router:Router,private vendorsService:VendorContactService) { }
  ngOnInit() {
    this.vendor = new Vendor();
    this.vnId = this.route.snapshot.params['vnId'];

    this.vendorsService.getVendorDetails(this.vnId)
      .subscribe(data =>{
        console.log(data)
        this.vendor= data;
      },error=>console.log(error));
  }
  list(){
    this.router.navigate(['/vendor']);
  }
}
