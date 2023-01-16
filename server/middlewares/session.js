<<<<<<< HEAD:server/controllers/sessionController.js
const Session = require('../models/SessionModel');

const sessionController = {};

sessionController.startSession = async (req, res, next) => {
  return next();
};

sessionController.updateSession = async (req, res, next) => {
  return next();
};

sessionController.clearupSession = async (req, res, next) => {
  return next(err);
};
module.exports = sessionController;
=======
import Session from '../models/sessionModel.js'

const sessionController = {}

sessionController.startSession = async (req, res, next) => {
  return next()
}

sessionController.updateSession = (req, res, next) => {
  return next()
}

sessionController.clearupSession = async (req, res, next) => {
  return next(err)
}

export default sessionController
>>>>>>> 636c827479b2e2155e818667d5155b72c3ae8787:server/middlewares/session.js
