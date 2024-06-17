import { ConnectionOptions } from "typeorm";
import { Test } from "./entities/test.entity";
import { Cosmetic } from "./entities/cosmetic.entity";


const config: ConnectionOptions = {
  type: "mysql",
  host: "localhost",
  port: 13306,
  username: "root",
  password: "1234",
  database: "ryan",
  entities: [Test, Cosmetic],
  synchronize: false,
};

export default config;
