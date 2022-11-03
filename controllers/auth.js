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
      link: 'http://localhost:4200/account/reset-password/200',
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
  if (token === '200') return { status: 200, message: 'successful' };
  if (token === '404') return { status: 404, message: 'unauthorized' };
  if (token === '500') return { status: 401, message: 'something went wrong!' };
};

authController.listApi = ({ page = 1, limit = 10, search, filters }) => {
  if (page === 0) page = 1;
  return {
    message: 'success',
    limit: Number(limit),
    totalRecords: collaborations.length,
    page: Number(page),
    list: collaborations.slice((page - 1) * limit, page * limit),
  };
};

authController.documentApi = ({ page = 1, limit = 10, search, filters }) => {
  if (page === 0) page = 1;
  return {
    message: 'success',
    limit: Number(limit),
    totalRecords: myDocuments.length,
    page: Number(page),
    list: myDocuments.slice((page - 1) * limit, page * limit),
  };
};

authController.usersApi = ({ page = 1, limit = 10, search, filters }) => {
  if (page === 0) page = 1;
  return {
    message: 'success',
    limit: Number(limit),
    totalRecords: users.length,
    page: Number(page),
    list: users.slice((page - 1) * limit, page * limit),
  };
};

authController.getAllFilters = () => {

  return filters;
};


authController.getProviderFilters = () => {
  return providerFilters;
}

authController.getAPCs = ({ page = 1, limit = 10, search, filters }) => {
  // return {
  //   limit: Number(limit),
  //   totalRecords: apcUsers.length,
  //   page: Number(page),
  //   list: apcUsers.slice((page - 1) * limit, page * limit),
  // }
  return apcUsers;
}

authController.getMDDOs = ({ page = 1, limit = 10, search, filters }) => {
  // return {
  //   limit: Number(limit),
  //   totalRecords: md_do_users.length,
  //   page: Number(page),
  //   list: md_do_users.slice((page - 1) * limit, page * limit),
  // }
  return md_do_users;
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
