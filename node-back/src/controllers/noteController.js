const { Note } = require('../models');

exports.createNote = async (req, res) => {
  try {

    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(400).json({ error: 'Name and description are required fields' });
    }

    const note = await Note.create({ name, description });

    res.status(201).json(note);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getAllNotes = async (req, res) => {
  try {

    const notes = await Note.findAll();

    res.json(notes);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.updateNote = async (req, res) => {
  try {

    const { name, description } = req.body;
    const note = await Note.findByPk(req.params.id);

    if (!note) {
      return res.status(404).json({ error: 'Заметка не найдена' });
    }

    if (name !== undefined) {
      note.name = name;
    }

    if (description !== undefined) {
      note.description = description;
    }

    await note.save();

    res.json(note);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.deleteNote = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);
    if (!note) return res.status(404).json({ error: 'Заметка не найдена' });

    await note.destroy();
    res.json({ message: 'Note deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
