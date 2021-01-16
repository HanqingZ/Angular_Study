import { NameModel } from './name.model';

export interface UserModule {
<<<<<<< master
  id: number;
  token: string,
  name: NameModel;
  login: string;
  password: string;

=======
  id: Number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
>>>>>>> Add authentication logic
}
