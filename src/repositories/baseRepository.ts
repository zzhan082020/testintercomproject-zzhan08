// import all interfaces
import IRead from '../interfaces/iRead';
import  { ReadLine, createInterface }  from 'readline';
import { once } from 'events';
import fs from 'fs';
// that class only can be extended
export default abstract class BaseRepository<T> implements IRead<T> {
  protected reader: any;
  constructor(path:string){
    this.reader = createInterface({
      input: fs.createReadStream(path),
      output: process.stdout,
      terminal: false
    });
  }
  /**
   * readline each line from data source
   * @param {Function} lineReader callback
   * @return {Promise} return Promise
   */
   readline = async (reader: (line:T)=>void): Promise<number> =>{
    let count:number = 0;
    this.reader.on('line', (line:string) => {
      const rawEach = JSON.parse(line);
      const each:T = rawEach;
      reader(each);
      count++;
    });

    await once(this.reader, 'close');
    return count;
  }

}