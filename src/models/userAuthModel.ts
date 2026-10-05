import {type UserProfile} from './userProfile'

export interface UserAuthModel {
  loginUser: (username: string, password: string) => Promise<{isSucessful: boolean, message: string}>;
  logoutUser: () => void;
  user: UserProfile | null;
}