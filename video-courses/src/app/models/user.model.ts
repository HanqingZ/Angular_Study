import { NameModel } from './name.model';

export interface UserModule {
  id: number;
  token: string,
  name: NameModel;
  login: string;
  password: string;

}
