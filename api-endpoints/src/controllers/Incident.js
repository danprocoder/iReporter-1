import IncidentModel from '../models/Incident';

const Incident = {
  // GET/red-flags request
  getAll(req, res) {
    const incidents = Incident.findAll();
    return res.status(200).json({ status: 200, incidents });
  },

  // POST/red-flags request
  create(req, res) {
    if (!req.body.type
      && !req.body.location
      && !req.body.status
      && !req.body.comment) {
      return res.status(400).json({
        status: 400,
        message: 'All fields are required',
      });
    }
    const incident = IncidentModel.create(req.body);
    return res.status(201).json({
      status: 200,
      message: 'Created red-flag record',
      data: incident,
    });
  },
};

export default Incident;
