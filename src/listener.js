class Listener {
  constructor(mailSender) {
    this._mailSender = mailSender;

    this.listen = this.listen.bind(this);
  }

  async listen(message) {
    try {
      const { playlistTarget, targetEmail } = JSON.parse(
        message.content.toString()
      );

      const result = await this._mailSender.sendEmail(
        targetEmail,
        JSON.stringify(playlistTarget)
      );

      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = Listener;
