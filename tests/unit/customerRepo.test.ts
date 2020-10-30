import {CustomRepo} from "../../src/repositories/customerRepository";
import ICustomer from "../../src/interfaces/iCustomer";
import * as path from 'path';

describe("test data service", () => {
  test("test data service readline", async () => {
  
  	let array:any = [12, 1, 2, 3, 28, 7, 8, 26, 27, 6, 9, 10, 4, 5, 11, 31, 13, 14, 15, 16, 17, 39, 18, 24, 19, 20, 21, 22, 29, 30, 23, 25];
  	let i = 0;
  	const lineReader:(each:ICustomer)=>boolean = (each:ICustomer)=>{
  		return true;
  	};
  	expect(CustomRepo.readline(lineReader)).resolves.toBe(32);
  });
});