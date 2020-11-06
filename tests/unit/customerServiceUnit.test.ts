import CustomerService from "../../src/services/customerService";
import {CustomRepo, CustomerRepository} from "../../src/repositories/customerRepository";

import ICustomer from "../../src/interfaces/iCustomer";
import * as path from 'path';
jest.mock('../../src/repositories/customerRepository', () => {
  class CustomerRepository{

	  readline = async (reader: (line:ICustomer)=>void): Promise<number> =>{

	    return 32;
	  }
	}
	let CustomRepo:CustomerRepository = new CustomerRepository()
  return {
  	CustomRepo: CustomRepo
  }

});
describe("test data service unit", () => {
  test("test data service readline unit", async () => {
    const ds:CustomerService = new CustomerService();
    const lineReader:(each:ICustomer)=>void = (each:ICustomer)=>{
  	};
    expect(ds.readLine(lineReader)).resolves.toBe(32);
  });
});