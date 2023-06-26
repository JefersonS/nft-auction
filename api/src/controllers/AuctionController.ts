import { Request, Response } from 'express'
import CollectionService from '../services/CollectionService'
import UserService from '../services/UserService'
import { CollectionInterface } from '../types/CollectionInterface'
import { UserInterface, UserNotificationPreference } from '../types/UserInterface'
import { NftInterface } from '../types/NftInterface'
import NftService from '../services/NftService'

class AuctionController {

  /**
   * Creates a new auction and sends the auction-created event
   * @param req 
   * @param res 
   * @returns API response
   */
  public async createAuction (req: Request, res: Response): Promise<Response> {
    const nftId = req.params.id
    if(nftId === undefined) {
      return res.status(404).json({ message: 'AUCTION ERROR: NFT ID was not provided' })
    }

    const nft = NftService.findById(nftId)
    if(nft === undefined) {
      return res.status(404).json('AUCTION ERROR: Nft for given nft id was not found')
    }

    const collection = CollectionService.findByNftId(nftId)
    if(collection === undefined) {
      return res.status(404).json('AUCTION ERROR: Collection for given NFT ID was not found')
    }

    const users = UserService.findByCollectionInterest(collection.id)
    if(users === undefined) {
      return res.status(404).json('AUCTION ERROR: no users have shown interest in this auction')
    }

    const messages = this.buildAuctionMessage(collection, users, nft)
    await req.producer.send({ topic: 'auction-created', messages: messages }).catch(console.error)

    return res.status(200).json({ message: `Auction created for NFT #${nftId}` });
  }

  /**
   * Build the message sent to the auction-created event
   * @param collection 
   * @param users 
   * @returns the list of stringified messages
   */
  public buildAuctionMessage (collection: CollectionInterface, users: UserInterface[], nft: NftInterface): {value: string}[] {
    let messages: {value: string}[] = []

    users.forEach(user => {
      messages.push({
        value: JSON.stringify({ message: {
          nft: { id: nft.id, name: nft.name },
          collection: { name: collection.name },
          user: {
            name: user.name,
            notificationPreferences: user.notificationPreferences?.map(preference => UserNotificationPreference[preference])
          }
        }})
      })
    })

    return messages
  }

}

export default AuctionController
