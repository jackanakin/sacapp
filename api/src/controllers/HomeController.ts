import { Request, Response } from "express";
import { Op } from 'sequelize';

import MyError from "../models/enums/MyError";
import CustomNotification from "../models/CustomNotification";

class HomeController {
  async index(req: Request, res: Response) {
    try {
      const { user } = req;

      const last24h = new Date(new Date().setDate(new Date().getDate() - 1));
      // @ts-ignore
      const customNotifications: any = await CustomNotification.findOne({
        where: {
          display: true,
          /*created_at: {
            [Op.between]: [last24h, new Date()],
          },*/
        },
        attributes: [
          "title", "subtitle", "extra", "external_url",
        ]
      });

      //return data
      return res.json({ customNotifications });
    } catch (err) {
      console.log(err);
    }

    return res
      .status(MyError.internal.code)
      .json({ error: MyError.internal.message });
  }
}

export default new HomeController();
