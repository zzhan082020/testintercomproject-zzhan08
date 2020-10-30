import ICustomer from "../interfaces/iCustomer";

export default class CustomerContainerComponent{
  private custContainer: ICustomer[];
  private prevReturn:any;
  public counter:number;
  /**
   * Construct new CustomerService
   */
  constructor(){
  	this.custContainer = [];
    this.prevReturn = undefined;
    this.counter = 0;
  }
  getCustomers = () => {
    return this.custContainer;
  }
  /**
   * insertAccending
   * @param {Function} lineReader callback
   * @return {Promise} return Promise
   */
  insertAccending = (each: ICustomer) => {
    this.counter++;
    const prevEndPosition = this.custContainer.length - 1;

    if(!this.prevReturn) {
      this.prevReturn = this.binaryAscdInsert(0, prevEndPosition, each)
    } else if (this.prevReturn && each.user_id >= this.prevReturn[1]){
      this.prevReturn = this.binaryAscdInsert(this.prevReturn[0], prevEndPosition, each);
    } else {
      this.prevReturn = this.binaryAscdInsert(0, this.prevReturn[0], each);
    }
  }
  /**
   * binaryAscdInsert
   * @param {Function} lineReader callback
   * @return {Promise} return Promise
   */
  binaryAscdInsert:any = (start:number, end:number, value:ICustomer) => {
    if(!value){
      return;
    }
    const len = end - start + 1;
    if(len < 1){
      this.custContainer[0] = value;
      return [0, value.user_id];
    }
    if(value.user_id > this.custContainer[start].user_id && value.user_id < this.custContainer[end].user_id){
      if((end - start) === 1){
        this.custContainer.splice(end, 0, value);
        return [end, value.user_id];
      }else{
        const half = (len / 2) | 0;
        const midPosition = half + start;
        if(value.user_id > this.custContainer[midPosition].user_id){
          return this.binaryAscdInsert(midPosition + 1, end, value);
        }else if (value.user_id < this.custContainer[midPosition].user_id){
          return this.binaryAscdInsert(start, midPosition - 1, value);
        } else{
          this.custContainer.splice(midPosition, 0, value);
          return [midPosition, value.user_id];
        }
      }
    }else if(value.user_id <= this.custContainer[start].user_id){
      if(start === 0){
        this.custContainer = [value].concat(this.custContainer);
        return [start, value.user_id];
      } else {
        this.custContainer.splice(start, 0, value);
        return [start, value.user_id];
      }
    }else if(value.user_id >= this.custContainer[end].user_id){
      if(len === this.custContainer.length){
        this.custContainer.push(value)
        return [start, value.user_id];
      } else {
        this.custContainer.splice(end + 1, 0, value);
        return [end + 1, value.user_id];
      }
    }
  }
}
