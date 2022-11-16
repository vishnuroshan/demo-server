const authController = {};
const shortId = require('shortid');
const apcUsers = require('./data/apc_users');
const md_do_users = require('./data/md_do_users');
const providerFilters = require('./data/provider_filters');
const collaborations = require('./data/collaborations');
const myDocuments = require('./data/my_documents');
const providerDetails = require('./data/provider_details');
const filters = require('./data/filters');
const login_response = require('./data/login_response');
let users = require('./data/users');

authController.forgotPassword = ({ email }) => {
  if (email === 'frg200@gmail.com')
    return {
      link: 'http://localhost:4200/account/reset-password/200/200',
      status: 200,
      message: 'mail sent to email. please check',
    };
  if (email === 'frg404@gmail.com')
    return { status: 404, message: 'email not found' };
  if (email === 'frg500@gmail.com')
    return { status: 500, message: 'something went wrong' };
};

authController.login = ({ username, password }) => {
  let result;
  if (username === 'frg200@gmail.com')
    result = login_response
  if (username === 'frg404@gmail.com')
    result = { status: 404, message: 'user not found' };
  if (username === 'frg401@gmail.com')
    result = { status: 401, message: 'unauthorized' };
  if (username === 'frg500@gmail.com')
    result = { status: 500, message: 'something went wrong' };
  return result;
};
authController.resetPassword = ({ token, password }) => {
  if (token === '200' || 'reset-token')
    return { status: 200, message: 'successful' };
  if (token === '404') return { status: 404, message: 'unauthorized' };
  if (token === '500') return { status: 401, message: 'something went wrong!' };
};

authController.verifyUser = ({ token }) => {
  console.log(token)
  if (token === '200') return { status: 200, message: 'successful' };
  if (token === '401') return { status: 404, message: 'unauthorized' };
  if (token === '400') return { status: 400, message: 'unauthorized' };
  if (token === '500') return { status: 401, message: 'something went wrong!' };
};

authController.listApi = ({ page = 1, limit = 20 }) => {
  if (page === 0) page = 1;
  return collaborations;
};

authController.documentApi = ({ page = 1, limit = 20}) => {
  if (page === 0) page = 1;
  return {
    count: myDocuments.length,
    next: 'some-string',
    previous: 'some-string',
    results: myDocuments.slice((page - 1) * limit, page * limit),
  };
};

authController.usersApi = ({ page = 1, limit = 20}) => {
  if (page === 0) page = 1;
  return {
    count: users.length,
    next: 'some-string',
    previous: 'some-string',
    results: users.slice((page - 1) * limit, page * limit),
  };
};

authController.getAllFilters = () => filters;
authController.getProviderFilters = () => providerFilters;

authController.getAPCs = ({ page = 1, limit = 20 }) => {
  if (page === 0) page = 1;
  return {
    count: apcUsers.length,
    next: 'some-string',
    previous: 'some-string',
    results: apcUsers.slice((page - 1) * limit, page * limit),
  }
}

authController.getMDDOs = ({ page = 1, limit = 20 }) => {
  if (page === 0) page = 1;
  return {
    count: md_do_users.length,
    next: 'some-string',
    previous: 'some-string',
    results: md_do_users.slice((page - 1) * limit, page * limit),
  }
}

authController.getUser = ({ id }) => {
  return providerDetails;
};

authController.createUser = (user) => {
  users.push({
    id: shortId(),
    apc_name: 'vishnu',
    md_do_name: 'roshan',
    ...user,
  });
};

authController.updateUser = (user) => {
  users = users.filter((e) => e.id !== user.id);
  users.push({ id: user.id, ...user });
};

module.exports = authController;
