import { Router } from 'express';

import CreatePlaceService from '../services/createPlaceService';

const placeRoutes = Router();

placeRoutes.post('/', async (request, response) => {
  try {
    const createPlace = new CreatePlaceService();
    const placeData = request.body;

    const place = await createPlace.execute(placeData);

    return response.json(place)
  } catch (err) {
    console.log(err)
  }

})

export default placeRoutes;