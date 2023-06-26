import { CollectionInterface } from './CollectionInterface'
import NftMocks from '../nfts/NftMocks'

const collectionMock: CollectionInterface[] = [
  {
    id: 'collection-1',
    name: 'Collection 1',
    nfts: [ NftMocks[0],  NftMocks[3], NftMocks[4] ]
  },
  {
    id: 'collection-2',
    name: 'Collection 2',
    nfts: [ NftMocks[1],  NftMocks[2], NftMocks[5] ]
  },
  {
    id: 'collection-3',
    name: 'Collection 3',
    nfts: [ NftMocks[6] ]
  }
]

export default collectionMock