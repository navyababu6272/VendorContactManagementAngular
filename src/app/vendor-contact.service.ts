import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Vendor} from './vendor'

@Injectable({
  providedIn: 'root'
})
export class VendorContactService {

  constructor(private httpService:HttpClient) { }
  
  vendors:Observable<Vendor[]>
  
  getVendorList():Observable<any>{
    return this.httpService.get(environment.apiUrl+'/vendordetails');
  }

  getVendorDetails(vnId: number):Observable<any>{
    return this.httpService.get(environment.apiUrl+'/vendorbyid/'+vnId);
  }


  createVendor(vendor:Object):Observable<any>{
    return this.httpService.post(environment.apiUrl+'/insertvendor',vendor);
  }

  updateVendor(vnId:number,vendor:Vendor):Observable<any>{
    return this.httpService.put(environment.apiUrl+'/updatevendor/'+vnId,vendor);
  }

  deleteVendor(vnId:number, vendor:Vendor):Observable<any>{
    return this.httpService.put(environment.apiUrl+'/disablevendor/'+vnId,vendor);

  }
  getVendorSearch():Observable<any>{

    return this.httpService.get(environment.apiUrl+'/search/all');
  }

  search(searchString:String):Observable<Vendor[]>{
    return this.httpService.get<Vendor[]>(environment.apiUrl+'/search/'+searchString);
  }
  duplicate(phone:String,email:String):any{
    return this.httpService.get<Vendor[]>(environment.apiUrl+'/duplication/'+phone+'/'+email)

  }
 
}
