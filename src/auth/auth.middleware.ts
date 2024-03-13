import { Injectable, NestMiddleware } from "@nestjs/common";
import * as jwt from "jsonwebtoken";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).send("Authentication token is missing");
    }

    try {
      const decoded = jwt.verify(token, "secretKey"); // Replace 'secretKey' with your secret key
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).send("Invalid authentication token");
    }
  }
}
