import { hashSync } from 'bcrypt-ts-edge'

export const USERS_MOCK = [
  {
    name: 'John',
    email: 'admin@example.com',
    password: hashSync('123456', 10),
    role: 'admin',
  },
  {
    name: 'Jane',
    email: 'user@example.com',
    password: hashSync('123456', 10),
    role: 'user',
  },
]