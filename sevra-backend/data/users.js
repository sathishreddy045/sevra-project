import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'sathishreddy045@gmail.com',
    password: bcrypt.hashSync('Reddy@045', 10),
    isAdmin: true,
  },
];

export default users;