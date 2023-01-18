const ContactsRepository = require("../repositories/ContactsRepository");

class ContactController {
  index(req, res) {
    // List all
    const contacts = ContactsRepository.findAll();
    res.json(contacts)
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
