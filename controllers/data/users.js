const shortId = require('shortid');

let users = [
  {
    id: shortId(),
    apc_name: 'vishnu',
    md_do_name: 'roshan',
    first_name: 'Vishnu',
    last_name: 'Roshan',
    mobile: '9984561234',
    user_type: 'SUPER_ADMIN',
    email: 'vish@dd.com',
  },
  {
    id: shortId(),
    apc_name: 'vishnu',
    md_do_name: 'roshan',
    first_name: 'damian',
    last_name: 'Wayne',
    mobile: '9984561234',
    user_type: 'ZIVIAN_ADMIN',
    email: 'redhood@dd.com',
  },
  {
    id: shortId(),
    apc_name: 'vishnu',
    md_do_name: 'roshan',
    first_name: 'Bruce',
    last_name: 'Wayne',
    mobile: '9984561234',
    user_type: 'ZIVIAN_ADMIN',
    email: 'bat@dd.com',
  },
  {
    id: shortId(),
    apc_name: 'vishnu',
    md_do_name: 'roshan',
    first_name: 'Clark',
    last_name: 'kent',
    mobile: '9984561234',
    user_type: 'SUPER_ADMIN',
    email: 'super@dd.com',
  },
];

module.exports = users;