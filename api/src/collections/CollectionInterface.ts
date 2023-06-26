import { NftInterface } from '../nfts/NftInterface'

export interface CollectionInterface {
  id: string
  name: string
  nfts: NftInterface[]  
}