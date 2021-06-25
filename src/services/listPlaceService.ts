import { getRepository } from "typeorm";
import Places from "../models/Places";

class ListPlaceService {
  public async execute(): Promise<Places | any> {
    try {
      const placeRepository = getRepository(Places);

      const places = placeRepository.findAndCount()

      return places;
    } catch (err) {
      return err;
    }
  }
}

export default ListPlaceService;
