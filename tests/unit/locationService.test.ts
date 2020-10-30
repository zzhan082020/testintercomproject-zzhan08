import LocationService from "../../src/services/locationService";
import ICustomer from "../../src/interfaces/iCustomer";
import * as path from 'path';
import config from '../../src/configuration/config.json';
describe("test data service", () => {
  test("test data service readline", async () => {
  	const ls:LocationService = new LocationService(config.officeLatitude, config.officeLongtitude, config.R);
  	expect(ls.distance(-0.16468989653671565, 0.9332150108506925).toFixed(0)).toBe("211");
  	const customer:ICustomer = {
		  latitude:53.4692815,
		  longitude:-9.436036,
		  name:"test",
		  user_id:1
  	};
  	expect(ls.withinRange(customer , 100)).toBe(false);
  });

  test("test data service readline", async () => {
  	const ls:LocationService = new LocationService(config.officeLatitude, config.officeLongtitude, config.R);
  	expect(ls.distance(-0.12217304763960307, 0.9332150108506925).toFixed(0)).toBe("51");
  	const customer:ICustomer = {
		  latitude:53.4692815,
		  longitude:-7,
		  name:"test",
		  user_id:1
    };
  	expect(ls.withinRange(customer , 100)).toBe(true);
  });
});