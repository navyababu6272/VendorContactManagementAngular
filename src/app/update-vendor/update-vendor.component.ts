import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Vendor } from '../vendor';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorContactService } from '../vendor-contact.service';
import { ToastrModule, ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-update-vendor',
  templateUrl: './update-vendor.component.html',
  styleUrls: ['./update-vendor.component.css']
})
export class UpdateVendorComponent implements OnInit {


  vnId: number;
  vendor: Vendor;
  editvendorForm: FormGroup;
  

  constructor(private fb: FormBuilder,private route: ActivatedRoute,private toastr:ToastrService,
    private router: Router,private vendorsService: VendorContactService) { }

  ngOnInit() {
    this.createForm();
    this.vnId=this.route.snapshot.params['vnId'];
    this.vendorsService.getVendorDetails(this.vnId)
    .subscribe(data=>{
      console.log(data)
      this.vendor=data;
        },error=>console.log(error));
    console.log
   
  }
  createForm() {
    this.editvendorForm = this.fb.group({
      vnName: ['', Validators.required ],
      vnAddress: ['', Validators.required ],
      vnLocation: ['', Validators.required ],
      vnService: ['', Validators.required ],
      vnPincode: ['', Validators.required ],
      name: ['', Validators.required ],
      department: ['', Validators.required ],
      email: ['', Validators.required ],
      phone: ['', Validators.required ],
           
    });
  }
  onSubmit(){ 
    this.updateVendor();
  }
  updateVendor(){
    //console.log("TS update"+this.vdId+this.vendor);
    this.vendorsService.updateVendor(this.vnId,this.vendor)
    .subscribe(data=>console.log(data),error=>console.log(error));
    this.vendor=new Vendor();
    this.gotoList();
    this.toastr.success('Vendor Edited Successfully Created','Vendor Contact Management System');
  }
  gotoList(){
    this.vendorsService.getVendorList();
    this.router.navigate(['/vendor']);
  }
 list(){
  this.router.navigate(['/vendor']);
}

}


