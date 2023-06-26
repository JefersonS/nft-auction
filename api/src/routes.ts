import { Router } from 'express';
import AuctionController from './auction/AuctionController';

const routes = Router();

routes.get('/create-auction/:id', async (req, res) => {
  const auctionController = new AuctionController()
  await auctionController.createAuction(req, res)
});

export default routes;