import * as express from "express"
import { User } from "../../src/ts/models/User"

interface Address {
    address: string;
    port: number;
}

declare global {
    namespace Express {
        interface Request {
            sourceSocket: Address;
            user: User;
        }
    }
}