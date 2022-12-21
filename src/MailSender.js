const nodemailer = require('nodemailer');
const config = require('./config');

class MailSender {
  constructor() {
    this._transporter = nodemailer.createTransport({
      host: config.nodemailerSMTPAuth.mailHost,
      port: config.nodemailerSMTPAuth.mailPort,
      auth: {
        user: config.nodemailerSMTPAuth.mailAddress,
        pass: config.nodemailerSMTPAuth.mailPassword
      }
    });
  }

  sendEmail(targetEmail, content) {
    const message = {
      from: 'Open Music Apps',
      to: targetEmail,
      subject: 'Ekspor Playlist',
      text: 'Terlampir hasil dari ekspor playlist',
      attachments: [
        {
          filename: 'playlists.json',
          content
        }
      ]
    };

    return this._transporter.sendMail(message);
  }
}

module.exports = MailSender;
