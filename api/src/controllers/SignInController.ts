import jwt from 'jsonwebtoken';

import MyError from "../models/enums/MyError";
import { Request, Response } from "express";
import User from "../models/User";
import { User as IUser } from "../ts/models/User";
import appConfig from "../config/appConfig";

class SignInController {
  async store(req: Request, res: Response) {
    try {
      const { email: submittedEmail, password } = req.body;

      //@ts-ignore
      const user = await User.findOne({
        where: { email: submittedEmail },
      }) as any as IUser;

      if (!user) {
        return res.status(401).json({ error: 'Falha de autenticação!' });
      }

      if (!(await user.checkPassword(password))) {
        return res.status(401).json({ error: 'Falha de autenticação!' });
      }

      
      const { id, name, email } = user;

      return res.json({
        user: {
          name,
          email,
        },
        token: jwt.sign({ id }, appConfig.SECRET, {
          expiresIn: appConfig.EXPIRES,
        }),
      });

    } catch (err) {
      console.log(err);
    }
    return res
      .status(MyError.internal.code)
      .json({ error: MyError.internal.message });
  }
}

export default new SignInController();
