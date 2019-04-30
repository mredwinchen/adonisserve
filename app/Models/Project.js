'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Project extends Model {
  user() {
    return this.belongsTo('APP/Models/User');
  }

  tasks () {
    return this.belongsTo('APP/Models/Task');
  }
}

module.exports = Project
