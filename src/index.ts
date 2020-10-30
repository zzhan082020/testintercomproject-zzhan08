import * as path from 'path';

import { logger } from './logger';
import ICustomer from './interfaces/iCustomer';
import config from './configuration/config.json';
import CustomerController from './controllers/customerController';

const custController:CustomerController = new CustomerController();
try{
  custController.getCustomersWithinRange(config.Range).
    then((list) => {
      list.forEach((e:ICustomer)=>{
        logger.warn("[Customer] Id %s , Name: %s", e.user_id, e.name);
      });
    });
}catch(e){
  logger.error(`[Application] Error: %s`, e);
}
