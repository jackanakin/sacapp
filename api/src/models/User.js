import Sequelize, { Model } from "sequelize";
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        password_hash: Sequelize.STRING,
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        src_created: Sequelize.STRING,
        status: Sequelize.STRING,
        allow_notification: Sequelize.BOOLEAN
      },
      { sequelize, tableName: "users" }
    );

    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }

}

export default User;
