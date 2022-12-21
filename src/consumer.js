require('dotenv').config();

const amqp = require('amqplib');
const config = require('./config');
const MailSender = require('./MailSender');
const Listener = require('./listener');

const init = async () => {
  const mailSender = new MailSender();
  const listener = new Listener(mailSender);

  const connection = await amqp.connect(config.rabbitMq.server);
  const channel = await connection.createChannel();

  await channel.assertQueue('export:playlists', {
    durable: true
  });

  channel.consume('export:playlists', listener.listen, { noAck: true });
};

init();
