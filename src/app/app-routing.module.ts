import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VendorComponent } from './vendor/vendor.component';
import { CreateVendorComponent } from './create-vendor/create-vendor.component';
import { UpdateVendorComponent } from './update-vendor/update-vendor.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [{path:'',pathMatch:'full',redirectTo:'login'},
                        {path:'login',component:LoginComponent },
                        {path:'vendor',component:VendorComponent },
                        {path:'vendor/addvendor',component:CreateVendorComponent },
                        {path:'updatevendor/:vnId',component:UpdateVendorComponent },
                        {path:'vendordetails/:vnId',component:VendorDetailsComponent,
                        canActivate: [AuthGuard]}
                      
                      
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
