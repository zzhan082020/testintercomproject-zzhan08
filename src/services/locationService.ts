
import fs from 'fs';
import ICustomer from "../interfaces/iCustomer";
import {sin, cos, acos, mathRadius} from "../components/mathComponent"

export default class LocationService{
  private latitude: number;
  private longtitude: number;
  private longOffice: number;
  private sinLaOffice: number;
  private cosLaOffice: number;
  private R:number;
  constructor(latitude:number, longtitude: number, R:number){
    this.latitude = latitude;
    this.longtitude = longtitude;
    this.R = R;

  	this.longOffice = mathRadius(this.longtitude);
    this.sinLaOffice = sin(mathRadius(this.latitude));
    this.cosLaOffice = cos(mathRadius(this.latitude));
  }
  /**
   * return if customer is within query range
   * @param {ICustomer} cumstomer detail
   * @param {number} distance range
   * @return {Promise} return Promise
   */
  withinRange = (customer:ICustomer, range: number)=> {
    const customerLatitude = mathRadius(customer.latitude);
    const customerLongtitude = mathRadius(customer.longitude);
    if(this.distance(customerLongtitude, customerLatitude)<= 100){
      return true;
    }
    return false;
  }
  /**
   * return distane to customer location
   * @param {number} longtitude
   * @param {number} latitude
   * @return {number} distance
   */
  distance = function(longCust:number,latCust:number){
    return this.R * acos(sin(latCust)*this.sinLaOffice + (cos(latCust) * this.cosLaOffice * cos(Math.abs(longCust - this.longOffice))));
  }
}
