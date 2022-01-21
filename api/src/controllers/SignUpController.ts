import { Response, Request } from "express";
import * as Yup from "yup";
import bcrypt from 'bcryptjs';

import MyError from "../models/enums/MyError";
import User from "../models/User";
import { User as UserTS } from "../ts/models/User"
import { UserStatus } from "../ts/models/UserStatus";

class SignUpController {

  async store(req: Request, res: Response) {
    try {
      const userDTO = req.body.params as UserTS;

      const schema = Yup.object().shape({
        name: Yup.string()
          .max(50)
          .required(),
        password: Yup.string().required().min(6),
        email: Yup.string().email()
      });

      await schema.validate(userDTO);

      // @ts-ignore
      const emailInUse = await User.findOne({
        where: {
          email: userDTO.email
        }
      }) as any as UserTS;

      if (emailInUse) return res.status(MyError.conflictedEmail.code).json({ error: MyError.conflictedEmail.message });

      // @ts-ignore
      const user = await User.create({
        ...userDTO, src_created: `${req.sourceSocket.address}:${req.sourceSocket.port}`,
        password_hash: await bcrypt.hash(userDTO.password, 8),
        status: UserStatus.ENABLED
      });

      return res.json();
    } catch (err: any) {
      if (err.errors) {
        return res.status(MyError.validation.code).json({ error: String(err.errors) });
      } else {
        console.log(err);
      }
    }

    return res
      .status(MyError.internal.code)
      .json({ error: MyError.internal.message });
  }
}

export default new SignUpController();
