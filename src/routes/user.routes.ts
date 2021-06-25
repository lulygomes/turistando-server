import { Router } from 'express';

import CreateUserService from '../services/createUserService';

const userRoutes = Router();

userRoutes.post('/', async (request, response) => {
  try {
    const createUser = new CreateUserService();
    const { name } = request.body;

    console.log(name)

    const user = await createUser.execute(name);

    return response.json(user)
  } catch (err) {
    console.log(err)
  }

})

export default userRoutes;