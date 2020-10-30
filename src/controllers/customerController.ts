import ICustomer from "../interfaces/iCustomer";
import CustomerService from "../services/customerService";
import LocationService from '../services/locationService';
import config from '../configuration/config.json';
import CustomerContainerComponent from '../components/CustomerContainerComponent';

import { logger } from '../logger';

export default class CustomerController{
  private custService: CustomerService;
  private locationService: LocationService;
  /**
   * Construct new CustomerService
   */
  constructor(){
  	this.locationService = new LocationService(config.officeLatitude, config.officeLongtitude, config.R);

  	this.custService = new CustomerService();
  }
  getCustomersWithinRange = async (range:number): Promise<ICustomer[]> => {
  	const CustomerContainer:CustomerContainerComponent = new CustomerContainerComponent();
    const lineReader:(each:ICustomer)=>void = (each:ICustomer)=>{
		  if(this.locationService.withinRange(each, config.Range)){
		  	CustomerContainer.insertAccending(each);
		  }
		};

	  const result = await this.custService.readLine(lineReader);
	  return CustomerContainer.getCustomers();

  }
}
