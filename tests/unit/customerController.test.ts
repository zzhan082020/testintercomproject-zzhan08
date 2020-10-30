import CustomerController from "../../src/controllers/customerController";
import ICustomer from "../../src/interfaces/iCustomer";
import * as path from 'path';
describe("test data service", () => {
  test("test data service readline", async () => {
  	const custController:CustomerController = new CustomerController();  	
  	expect(custController.getCustomersWithinRange(100).then((customers:ICustomer[])=>{
      return customers.map((e)=>e.user_id).length;
    })).resolves.toBe(16);
  });
});