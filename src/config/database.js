const environment = process.env.ENVIRONMENT || 'development'
const config = require('../../knexfile.js')[environment]

export const database = require('knex')(config)
