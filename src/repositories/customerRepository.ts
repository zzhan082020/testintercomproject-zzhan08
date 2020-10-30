import  { ReadLine, createInterface }  from 'readline';
import { once } from 'events';
import fs from 'fs';
import BaseRepository from "./BaseRepository";
import ICustomer from "../interfaces/iCustomer";
import config from '../configuration/config.json';
import * as path from 'path';

// now, we have all code implementation from BaseRepository
export class CustomerRepository extends BaseRepository<ICustomer>{

  /**
   * Construct new customer repository
   */
  constructor(dir:string) {
    super(dir);
  }
  /**
   * return response message
   * @param {Function} lineReader callback
   * @return {Promise} return Promise
   */

  readline = async (reader: (line:ICustomer)=>void): Promise<number> =>{
  	let count:number = 0;
    this.reader.on('line', (line:string) => {
      const rawCustomer = JSON.parse(line);
      const customer:ICustomer={
        latitude:rawCustomer.latitude,
        longitude:rawCustomer.longitude,
        name:rawCustomer.name,
        user_id:rawCustomer.user_id
      }
      reader(customer);
      count++;
    });

    await once(this.reader, 'close');
    return count;
  }
}

export const CustomRepo = new CustomerRepository(path.resolve(process.cwd(), "./database/customers.txt"));