import app from './app'

async function runServer() {  
  await app.producer.connect()
  app.express.listen(process.env.PORT!);
  console.log('Listening...')
};

runServer().catch(console.error);