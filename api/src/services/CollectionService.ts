import { CollectionInterface } from '../types/CollectionInterface'
import collectionMocks from '../mocks/CollectionMocks'

class CollectionService {

  /**
   * Finds the collection with given collection id
   * @param collectionId 
   * @returns a collection
   */
  public findById (collectionId: string): CollectionInterface | undefined {
    return collectionMocks.find((collection) => collection.id === collectionId)
  }

  /**
   * Finds the collection containing the given nft id
   * @param nftId 
   * @returns a collection
   */
  public findByNftId (nftId: string): CollectionInterface | undefined {
    return collectionMocks.find((collection) => collection.nfts.find(nft => nft.id === nftId))
  }

}

export default new CollectionService()
