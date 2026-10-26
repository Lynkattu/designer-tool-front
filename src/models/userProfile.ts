import type { UserIconModel } from "./userIconModel";

export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  username: string;
  role: string;
  userIcon: UserIconModel;
}