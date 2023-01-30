import Note from '../models/NoteModel.js'

export const createNote = async (req, res) => {
  const { title, body, date } = req.body

   if ( !title ||!body || !date ){
     return res.status(400).json({
      message: "Missing required fields"
     })
   }

   try {
 // create a note
 const newNote = await Note.create({title,body,date})
//return create note
return res.status(200).json ({
  note: newNote
})  
} catch (error) {
    console.log(error)
    return res.status(500).json({
      message:"Server error",
      error
    })
   }
}

export const getAllNotes = async(req,res) => {
  try {
    const notes = await Note.find().lean()
  return res.status(200).json({
    notes
  })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message:"Server error",
      error
    })
   }
}

const NotesController = {};

NotesController.addNote = async (req, res, next) => {
    console.log("req.body", req.body);
    console.log("req.header", req);
    const body = req.body;
    const text = `INSERT INTO note(id, title, body, date) VALUES ('${body.id}', '${body.title}', ${body.body}, '${body.date}');`;
  
    console.log(text);
  
    await db
      .query(text)
      .then(() => {
        return next();
      })
      .catch((err) => {
        return next(err);
      });
  };
  
  NotesController.deleteNote = async (req, res, next) => {
    const body = req.body;
    const text = `DELETE FROM bill WHERE note.id = ${body.id};`;
  
    await db
      .query(text)
      .then(() => {
        return next();
      })
      .catch((err) => {
        return next(err);
      });
  };

  NotesController.getNotes = async (req, res, next) => {
    const queryString = `SELECT * FROM note`
  
    await db
      .query(queryString)
      .then(() => {
        return next()
      })
      .catch((err) => {
        return next(err)
      })
  }
  export default NotesController;