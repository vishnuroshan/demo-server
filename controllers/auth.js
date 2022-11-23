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
const org_list = require('./data/org_list');
let users = require('./data/users');

authController.forgotPassword = ({ email }) => {
  if (email === 'frg200@gmail.com')
    return {
      link: 'http://localhost:4200/account/reset-password/200/200',
      status: 200,
      message: 'mail sent to email. please check',
    };
  if (email === 'frg400@gmail.com')
    return {
      link: 'http://localhost:4200/account/reset-password/400/400',
      status: 200,
      message: 'mail sent to email. please check',
    };
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

authController.orgList = () => {
  return org_list;
}

authController.getUser = ({ id }) => {
  return providerDetails;
};

authController.getOrgById = ({id}) => {
  const result = org_list.results.find(e=>e.id===id);
  if(!result) return org_list.results[0];
  return result;
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

authController.makeAddress= ()=> {
  const addressObj = {
        "id": 23,
        "block_no": "",
        "apartment_or_building": "",
        "address_line_1": "5419 Wheeler Ridge Rd",
        "address_line_2": 'Medical college road',
        "city": "5419 Wheeler Ridge Rd",
        "zip_code": "30011",
        "address_type": "Home",
        "created_at": "2022-11-01T15:33:56.223535Z",
        "updated_at": "2022-11-01T15:33:56.223545Z",
        "zivian_user": 20,
        "apc_user": null,
        "md_do_user": 4,
        "state": 6,
        "country": 1
      }

      return `${addressObj.address_line_1},\n${addressObj.address_line_2},\n${addressObj.city} - ${addressObj.zip_code}`;
}

module.exports = authController;
