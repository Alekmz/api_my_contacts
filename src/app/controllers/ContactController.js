const ContactsRepository = require("../repositories/ContactsRepository");

class ContactController {
  async index(req, res) {
    // List all
    const contacts = await ContactsRepository.findAll();
    res.json(contacts);
  }

  async show(req, res) {
    const { id } = req.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return res.status(404).json({ message: "User not found!" });
    }

    res.json(contact);
  }

  store() {
    // Create a new register
  }

  update() {
    // Update register
  }

  async delete(req, res) {
    const { id } = req.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return res.status(404).json({ message: "User not found!" });
    }
    await ContactsRepository.delete(id);
    res.sendStatus(204);
  }
}
module.exports = new ContactController();
