import { getRepository } from "typeorm";
import Places from "../models/Places";

interface RequestData {
  name: string;
  city: string;
  uf: string;
  reference: string;
  about: string;
  owner: string;
}

class CreatePlaceService {
  public async execute({
    name,
    about,
    city,
    owner,
    reference,
    uf
  }: RequestData): Promise<Places | any> {
    try {
      const placeRepository = getRepository(Places);

      const place = placeRepository.create({
        name,
        about,
        city,
        owner,
        reference,
        uf
      })

      await placeRepository.save(place);
      
      return place;
    } catch (err) {
      console.log(err)
      return err;
    }
  }
}

export default CreatePlaceService;
