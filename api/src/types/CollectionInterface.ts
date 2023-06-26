import { NftInterface } from './NftInterface'

export interface CollectionInterface {
  id: string
  name: string
  nfts: NftInterface[]  
}