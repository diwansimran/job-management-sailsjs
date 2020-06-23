/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  'GET /jobs562/': 'JobsController.getAll562',
  'GET /adddata562': {view:'adddata'},
  'GET /getone562/': 'JobsController.getOne562',
  'POST /job562/': 'JobsController.create562',
  'PUT /job562/': 'JobsController.update562',
  'POST /deletejob562/': 'JobsController.delete562',
  'POST /updatejob562/': 'JobsController.updatejob562',
  'POST /jobupdate562': 'JobsController.update562',
  'GET /finddata562': {view:'finddata'},
  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
