import { User } from 'src/infra/typeorm/authModule/entities/user.entity';

export type registerUserResponse = {
  user: User;
};
