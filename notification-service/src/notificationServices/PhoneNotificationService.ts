import NotificationService from "./NotificationService"

class SmsNotificationService extends NotificationService {
  constructor (user: string, collection: string, nft: string) {
    super(user, collection, nft)
  }

  /**
   * Builds a custom Phone notification based off the event message
   * @returns a message
   */
  public buildMessage (): string {
    return `Hello! This is an automated call to let you know that an auction has just started for NFT #${this.nft}# from Collection #${this.collection}#`
  }

  /**
   * Makes a phone call to the user playing the given message
   * @param message 
   */
  public async makePhoneCall (message: string): Promise<void> {
    // used only to simulate different execution times
    const randomNumber = Math.random() * (2000 - 200) + 200;
    await new Promise(resolve => setTimeout(resolve, randomNumber)).catch(console.error)
    console.log(`Messaging user #${this.user}# using #PHONE# preference with message: ${message}`)
  }
}

export default SmsNotificationService
