import ICustomer from "../interfaces/iCustomer";
import {CustomRepo, CustomerRepository} from "../repositories/customerRepository";

export default class CustomerService{
  private custRepo: CustomerRepository;
  /**
   * Construct new CustomerService
   */
  constructor(){
  	this.custRepo = CustomRepo;
  }
  /**
   * return response message
   * @param {Function} lineReader callback
   * @return {Promise} return Promise
   */
  readLine = async (lineReader: (line:ICustomer)=>void) => {
    return await this.custRepo.readline(lineReader);
  }
}
