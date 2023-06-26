class NotificationService {
  public user: string
  public collection: string
  public nft: string

  constructor (user: string, collection: string, nft: string) {
    this.user = user
    this.collection = collection
    this.nft = nft
  }
}

export default NotificationService
