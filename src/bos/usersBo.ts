'use strict';

import bcrypt from 'bcrypt';
import UserSchema, { User } from '../models/User';

class UserBo {
  public async getUser(): Promise<User[]> {
    const topics: User[] = await UserSchema.findAll();

    return topics;
  }

  public async getUserDetail(id: any): Promise<User[]> {
    const topics: User[] = await UserSchema.findAll({
      where: { id: id },
    });

    return topics;
  }

  public async postUser(
    userName: string,
    name: string,
    email: string,
    password: string,
    birthDate: Date,
    userLocation: string,
    gender: string,
    bio: string,
  ): Promise<User> {
    const bPassword = await bcrypt.hash(password.toString(), 7);

    const user: any = await UserSchema.create({
      userName: userName,
      name: name,
      email: email,
      password: bPassword,
      bithDate: birthDate,
      userLocation: userLocation,
      gender: gender,
      bio: bio,
    });

    return user;
  }
}

export const userBo = new UserBo();
