import Sequelize, { Model } from "sequelize";

class CustomNotification extends Model {
    static init(sequelize) {
        super.init(
            {
                title: Sequelize.STRING,
                subtitle: Sequelize.STRING,
                extra: Sequelize.STRING,
                external_url: Sequelize.STRING,
                display: Sequelize.BOOLEAN,
            },
            { sequelize, tableName: "custom_notification" }
        );

        return this;
    }
}

export default CustomNotification;
