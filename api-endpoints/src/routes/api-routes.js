import express from 'express';
import Incident from '../controllers/Incident';

const router = express.Router();

router.use(express.json());

/**
 * /red-flag endpoints
 */
// get all red-flag records
router.get('/api/v1/red-flags', Incident.getAll);
// create a red-flag record
<<<<<<< HEAD
router.get('/api/v1/red-flags', Incident.getAll);
=======
router.post('/api/v1/red-flags', Incident.create);
>>>>>>> develop

export default router;
