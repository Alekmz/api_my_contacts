class ContactController {
  index(req, res) {
    // List all
    res.send('Hello World!');
  }

  show() {
    // Get register with id for example
  }

  store() {
    // Create a new register
  }

  update() {
    // Update register
  }

  delete() {
    // Delete register
  }
}
module.exports =  new ContactController();
