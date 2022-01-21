import Sequelize from "sequelize";
import databaseConfig from "../../../config/database/main";

import User from "../../../models/User";
import CustomNotification from "../../../models/CustomNotification";

const models = [
  User,
  CustomNotification,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
