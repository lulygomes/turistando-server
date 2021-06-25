import { getRepository, Like } from "typeorm";
import Places from "../models/Places";

class SearchPlaceService {
  public async execute(find: string): Promise<Places | any> {
    try {
      const placeRepository = getRepository(Places);

      const places = placeRepository.find({
        where: [
          { about: (Like(`%${find}%`)) },
          { city: (Like(`%${find}%`)) },
          { name: (Like(`%${find}%`)) },
          { reference: (Like(`%${find}%`)) },
          { owner: (Like(`%${find}%`)) },
        ]
      })

      return places;
    } catch (err) {
      return err;
    }
  }
}

export default SearchPlaceService;
