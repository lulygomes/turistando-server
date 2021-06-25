import { getRepository } from "typeorm"
import User from "../models/Users"

class CreateUserService {
  public async execute(name: string): Promise<User | any> {
    try {
      const userRepository = getRepository(User);

      const existUser = await userRepository.findOne({ where: { name }});

      if (existUser) {
        return existUser;
      }

      const user = userRepository.create({name});
      await userRepository.save(user)

      console.log(user)
      return user;
    } catch (err) {
      console.log(err)
      return err
    }
  }
}

export default CreateUserService;