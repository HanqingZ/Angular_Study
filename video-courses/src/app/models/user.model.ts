import { NameModel } from './name.model';

export interface UserModel {
  id: number;
  token: string,
  name: NameModel;
  login: string;
  password: string;

}
