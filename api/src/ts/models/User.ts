import { UserStatus } from "./UserStatus";

export interface User {
    id: number;
    name: string;
    password_hash: string;
    email: string;
    password: string;
    src_created: string;
    status: UserStatus;
    allow_notification: boolean;

    save(): Promise<void>;
    checkPassword(pass: string): Promise<boolean>;
}