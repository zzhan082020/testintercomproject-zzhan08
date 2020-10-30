import CustomerContainerComponent from "../../src/components/customerContainerComponent";
import ICustomer from "../../src/interfaces/iCustomer";
import * as path from 'path';

describe("test data service", () => {
  test("test data service readline", async () => {
    let container:CustomerContainerComponent = new CustomerContainerComponent();
    let cusList: ICustomer[] = [
      {
			  latitude:53.4692815,
			  longitude:-7,
			  name:"test",
			  user_id:10
	  	},
	  	{
			  latitude:53.4692815,
			  longitude:-7,
			  name:"test",
			  user_id:4
	  	},
	  	{
			  latitude:53.4692815,
			  longitude:-7,
			  name:"test",
			  user_id:7
	  	},
	  	{
			  latitude:53.4692815,
			  longitude:-7,
			  name:"test",
			  user_id:2
	  	},
	  	{
			  latitude:53.4692815,
			  longitude:-7,
			  name:"test",
			  user_id:6
	  	}
    ];

    for(let i:number = 0, size:number = cusList.length; i < size; i++){
      container.insertAccending(cusList[i]);
    }
    let strList: string =  container.getCustomers().map(e=>e.user_id).toString();
    expect(strList).toBe([2, 4, 6, 7, 10].toString());
  	
  });
});