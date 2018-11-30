import uuid from 'uuid';
import moment from 'moment';
import UserID from './User';

class Incident {
  // class ctor
  constructor() {
    // this.incidents = [new UserID()];
    this.incidents = [];
  }

  // create method
  create(data) {
    const newIncident = {
      id: uuid.v4(),
      createdOn: moment.now(),
      createdBy: UserID.id,
      type: data.type,
      location: data.location,
      status: data.status,
      // images: []
      // videos: []
      comment: data.comment,
    };
    this.incidents.push(newIncident);
    return newIncident;
  }

  // findAll method
  findAll() {
    return this.incidents;
  }

  // findOne method
  findOne(id) {
    return this.incidents.find(incident => incident.id === id);
  }

  // update method
  update(id, data) {
    const incident = this.findOne(id);
    const index = this.incidents.indexOf(incident);
    this.incidents[index].type = data.type || incident.type;
    this.incidents[index].location = data.location || incident.location;
    this.incidents[index].status = data.status || incident.status;
    this.incidents[index].location = data.location || incident.location;
    return this.incidents[index];
  }

  // delete method
  delete(id) {
    const incident = this.findOne(id);
    const index = this.incidents.indexOf(incident);
    this.incidents.slice(index, 1);
    return {};
  }
}

export default new Incident();
