import { Router } from 'express';

import CreatePlaceService from '../services/createPlaceService';
import ListPlaceService from '../services/listPlaceService';
import SearchPlaceService from '../services/searchPlaceService'

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

placeRoutes.get('/', async (request, response) => {
  try {
    const listPlace = new ListPlaceService();

    const place = await listPlace.execute();

    return response.json(place)
  } catch (err) {
    console.log(err)
  }
})

placeRoutes.get('/find', async (request, response) => {
  const { find } = request.query;
  const searchService = new SearchPlaceService();
  
  const places = await searchService.execute(find as string);

  return response.json(places);
})

export default placeRoutes;
