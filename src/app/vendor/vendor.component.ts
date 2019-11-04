import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from '../vendor';
import { VendorContactService } from '../vendor-contact.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
 
  public popoverTitle:string ='Disable';
  public popoverMessage:string ='Do you want to diable  ?';
  public popoverMessageLogout:string ='Do you want to logout  ?';
  public confirmClicked: boolean= false;
  public cancelClicked:boolean=false;

  vendors:Observable<Vendor[]>
  constructor(private vendorsService: VendorContactService,private authService:AuthService,
                private router:Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    
    this.vendors = this.vendorsService.getVendorList();
    console.log(this.vendors);
  }

  getVendorDetails(): void{
    this.vendorsService.getVendorSearch().subscribe((Data)=>
    {
      this.vendors=Data,
      console.log(Data);
    },(error)=>{
      console.log(error);
    }
    );
  }

  deleteVendor(vnId: number,vendor:Vendor){
    this.vendorsService.deleteVendor(vnId,vendor)
    .subscribe(
      data =>{
        console.log(data);
        this.reloadData();
      },
      error=> console.log(error));
    }

  vendorDetails(vnId:number){
    console.log(vnId);
    this.router.navigate(['vendordetails',vnId]);
  }

  updateVendor(vnId:number){
  console.log(vnId);
  this.router.navigate(['updatevendor',vnId]);
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
    
  }
  searchString:String;
  //search 

  search(searchString){
    console.log(searchString);
    if(searchString!=null){
    this.vendors=this.vendorsService.search(this.searchString);
   
  }else{
    console.log("Else :" +searchString);
    this.getVendorDetails()
  }
}
 }

