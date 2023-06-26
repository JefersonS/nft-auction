import { NftInterface } from './NftInterface'
import NftMocks from './NftMocks'

class NftService {

  /**
   * Finds the nft with given nft it
   * @param nftId 
   * @returns a nft
   */
  public findById (nftId: string): NftInterface | undefined {
    return NftMocks.find((nft) => nft.id === nftId)
  }

}

export default new NftService()
