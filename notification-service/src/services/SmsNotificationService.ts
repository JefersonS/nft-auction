import NotificationService from "./NotificationService"

class SmsNotificationService extends NotificationService {
  constructor (user: string, collection: string, nft: string) {
    super(user, collection, nft)
  }

  /**
   * Builds a custom SMS notification based off the event message
   * @returns a message
   */
  public buildMessage (): string {
    return `Auction started for NFT #${this.nft}# from Collection #${this.collection}#.`
  }

  /**
   * Sends a SMS to the user using the given message
   * @param message 
   */
  public async sendSms (message: string): Promise<void> {
    // used only to simulate different execution times
    const randomNumber = Math.random() * (2000 - 200) + 200;
    await new Promise(resolve => setTimeout(resolve, randomNumber)).catch(console.error)
    console.log(`Messaging user #${this.user}# using #SMS# preference with message: ${message}`)
  }
}

export default SmsNotificationService
