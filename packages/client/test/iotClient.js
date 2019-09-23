import serverConfig from "back/src/config";
import serverConstants from "back/test/constants/auth";
import chai from "./lib/chai";
import { IoTClient } from "../src/index";

const should = chai.should();
const url = `http://localhost:${serverConfig.nodePort}`;
const basicAuthUsername = Object.keys(serverConfig.basicAuthUsers)[0];
const basicAuthPassword = serverConfig.basicAuthUsers[basicAuthUsername];
const { username, password } = serverConstants.validUser;

describe("IoT Client", () => {
  describe("IoT Client initialization with error", () => {
    let iotClient;
    try {
      iotClient = new IoTClient({
        url,
      });
    } catch (err) {
      should.exist(err);
    }
    should.not.exist(iotClient);
  });

  describe("IoT Client successfully initialization", () => {
    it("creates an instance of IoT Client", () => {
      const iotClient = new IoTClient({
        url,
        basicAuthUsername,
        basicAuthPassword,
      });
      should.exist(iotClient);
    });
    it("creates an instance of IoT Client providing auth", () => {
      const iotClient = new IoTClient({
        url,
        basicAuthUsername,
        basicAuthPassword,
        username,
        password,
      });
      should.exist(iotClient);
    });
  });
});