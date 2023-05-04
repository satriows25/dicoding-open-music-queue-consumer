# Open Music Queue Consumer

The Open Music Queue Consumer is a project for the final assignment of the [Belajar Fundamental Aplikasi Back-End](https://www.dicoding.com/academies/271) course in [Dicoding Indonesia](https://www.dicoding.com). It is a message broker project that consumes messages from the RabbitMQ queue.

This project is designed to complement the [Open Music API](https://github.com/satriows25/dicoding-open-music-api) project, which uses RabbitMQ as a message broker for processing messages related to songs, albums, and singers. The Open Music Queue Consumer project consumes messages from the RabbitMQ queue and performs the necessary actions based on the message content.

Through this project, students in the [Belajar Fundamental Aplikasi Back-End](https://www.dicoding.com/academies/271) course can practice their skills in message broker development, particularly in consuming messages from queues and performing the necessary actions based on the message content. This project also provides a practical example of how a message broker can be used in a music-related application to enhance its functionality and performance.

## Configuring the Environment

`.env` file (development):

```
# nodemailer SMTP authentication
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_ADDRESS=
MAIL_PASSWORD=

# Message broker
RABBITMQ_SERVER=amqp://localhost
```

## Running Locally

```bash
$ git clone https://github.com/satriows25/dicoding-open-music-queue-consumer.git
$ cd dicoding-open-music-queue-consumer
$ npm install
$ npm run start-dev
```
