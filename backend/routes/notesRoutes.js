const express = require('express');
const { addNotes, getNoteById, deleteNote } = require('../controllers/notesController');

const router = express.Router();

router.route('/notes/add').post(addNotes);

router.route('/note/:id').get(getNoteById).delete(deleteNote);



module.exports = router;