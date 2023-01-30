import express from 'express'
import NotesController from '../controllers/NotesController.js'
import { createNote, getAllNotes } from '../controllers/NotesController.js'
const router = express.Router();
//api/note/
router.get('/',getAllNotes)
router.post('/create', createNote)

// router.get(
//     "/",
//     NotesController.getNotes,
//     (req, res) => res.status(200).json(res.locals.AllNotes)
//   );



// router.post(
//     "/notes",
//     NotesController.getNotes,
//     NotesController.addNote,
//     (req, res) => res.sendStatus(200)
//   );

// router.delete('/deleteNote', NotesController.deleteNote, (req, res) => res.sendStatus(200)
// )


  export default router;