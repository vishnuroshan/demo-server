const authController = {};
const list = [
  {
    collaborator_name: "vishnuroshan",
    role: "NP",
    state_name: "NY",
    active_date: "2022/12/21",
    collab_status: "Submitted",
  },
  {
    collaborator_name: "gideon",
    role: "NP,CNM",
    state_name: "OZ",
    active_date: "2022/12/21",
    collab_status: "Not submitted",
  },
  {
    collaborator_name: "lorry",
    role: "NP",
    state_name: "NY",
    active_date: "2022/10/03",
    collab_status: "Submitted",
  },
  {
    collaborator_name: "brad",
    role: "NP,LLK,JHK,MNG",
    state_name: "CA",
    active_date: "2021/08/07",
    collab_status: "Submitted",
  },
  {
    collaborator_name: "max",
    role: "NP,AR",
    state_name: "NY",
    active_date: "2022/08/07",
    collab_status: "Not submitted",
  },
  {
    collaborator_name: "mary",
    role: "NP",
    state_name: "NY",
    active_date: "2022/11/27",
    collab_status: "Submitted",
  },
  {
    collaborator_name: "vilma",
    role: "KLKLKLK",
    state_name: "TX",
    active_date: "2021/08/07",
    collab_status: "Not submitted",
  },
  {
    collaborator_name: "gideon",
    role: "NP,CNM",
    state_name: "OZ",
    active_date: "2022/12/21",
    collab_status: "Not submitted",
  },
  {
    collaborator_name: "lorry",
    role: "NP",
    state_name: "NY",
    active_date: "2022/10/03",
    collab_status: "Submitted",
  },
  {
    collaborator_name: "brad",
    role: "NP,LLK,JHK,MNG",
    state_name: "CA",
    active_date: "2021/08/07",
    collab_status: "Submitted",
  },
  {
    collaborator_name: "max",
    role: "NP,AR",
    state_name: "NY",
    active_date: "2022/08/07",
    collab_status: "Not submitted",
  },
  {
    collaborator_name: "mary",
    role: "NP",
    state_name: "NY",
    active_date: "2022/11/27",
    collab_status: "Submitted",
  },
  {
    collaborator_name: "vilma",
    role: "NP,CCP,DNM,BPM,HJK",
    state_name: "TX",
    active_date: "2021/08/07",
    collab_status: "Not submitted",
  },
  {
    collaborator_name: "gideon",
    role: "NP,CNM",
    state_name: "OZ",
    active_date: "2022/12/21",
    collab_status: "Not submitted",
  },
  {
    collaborator_name: "lorry",
    role: "NP",
    state_name: "NY",
    active_date: "2022/10/03",
    collab_status: "Submitted",
  },
  {
    collaborator_name: "brad",
    role: "NP,LLK,JHK,MNG",
    state_name: "CA",
    active_date: "2021/08/07",
    collab_status: "Submitted",
  },
  {
    collaborator_name: "max",
    role: "NP,AR",
    state_name: "NY",
    active_date: "2022/08/07",
    collab_status: "Not submitted",
  },
  {
    collaborator_name: "mary",
    role: "NP",
    state_name: "NY",
    active_date: "2022/11/27",
    collab_status: "Submitted",
  },
  {
    collaborator_name: "vilma",
    role: "NP,CCP,DNM,BPM,HJK",
    state_name: "TX",
    active_date: "2021/08/07",
    collab_status: "Not submitted",
  },
  {
    collaborator_name: "gideon",
    role: "NP,CNM",
    state_name: "OZ",
    active_date: "2022/12/21",
    collab_status: "Not submitted",
  },
  {
    collaborator_name: "lorry",
    role: "NP",
    state_name: "NY",
    active_date: "2022/10/03",
    collab_status: "Submitted",
  },
  {
    collaborator_name: "brad",
    role: "NP,LLK,JHK,MNG",
    state_name: "CA",
    active_date: "2021/08/07",
    collab_status: "Submitted",
  },
  {
    collaborator_name: "max",
    role: "NP,AR",
    state_name: "NY",
    active_date: "2022/08/07",
    collab_status: "Not submitted",
  },
  {
    collaborator_name: "mary",
    role: "NP",
    state_name: "NY",
    active_date: "2022/11/27",
    collab_status: "Submitted",
  },
  {
    collaborator_name: "vilma",
    role: "NP,CCP,DNM,BPM,HJK",
    state_name: "TX",
    active_date: "2021/08/07",
    collab_status: "Not submitted",
  },
  {
    collaborator_name: "gideon",
    role: "NP,CNM",
    state_name: "OZ",
    active_date: "2022/12/21",
    collab_status: "Not submitted",
  },
  {
    collaborator_name: "lorry",
    role: "NP",
    state_name: "NY",
    active_date: "2022/10/03",
    collab_status: "Submitted",
  },
  {
    collaborator_name: "brad",
    role: "NP,LLK,JHK,MNG",
    state_name: "CA",
    active_date: "2021/08/07",
    collab_status: "Submitted",
  },
  {
    collaborator_name: "max",
    role: "NP,AR",
    state_name: "NY",
    active_date: "2022/08/07",
    collab_status: "Not submitted",
  },
  {
    collaborator_name: "mary",
    role: "NP",
    state_name: "NY",
    active_date: "2022/11/27",
    collab_status: "Submitted",
  },
  {
    collaborator_name: "vilma",
    role: "NP,CCP,DNM,BPM,HJK",
    state_name: "TX",
    active_date: "2021/08/07",
    collab_status: "Not submitted",
  },
  {
    collaborator_name: "gideon",
    role: "NP,CNM",
    state_name: "OZ",
    active_date: "2022/12/21",
    collab_status: "Not submitted",
  },
  {
    collaborator_name: "lorry",
    role: "NP",
    state_name: "NY",
    active_date: "2022/10/03",
    collab_status: "Submitted",
  },
  {
    collaborator_name: "brad",
    role: "NP,LLK,JHK,MNG",
    state_name: "CA",
    active_date: "2021/08/07",
    collab_status: "Submitted",
  },
  {
    collaborator_name: "max",
    role: "NP,AR",
    state_name: "NY",
    active_date: "2022/08/07",
    collab_status: "Not submitted",
  },
  {
    collaborator_name: "mary",
    role: "NP",
    state_name: "NY",
    active_date: "2022/11/27",
    collab_status: "Submitted",
  },
  {
    collaborator_name: "vilma",
    role: "NP,CCP,DNM,BPM,HJK",
    state_name: "TX",
    active_date: "2021/08/07",
    collab_status: "Not submitted",
  },
  {
    collaborator_name: "gideon",
    role: "NP,CNM",
    state_name: "OZ",
    active_date: "2022/12/21",
    collab_status: "Not submitted",
  },
  {
    collaborator_name: "lorry",
    role: "NP",
    state_name: "NY",
    active_date: "2022/10/03",
    collab_status: "Submitted",
  },
  {
    collaborator_name: "brad",
    role: "NP,LLK,JHK,MNG",
    state_name: "CA",
    active_date: "2021/08/07",
    collab_status: "Submitted",
  },
  {
    collaborator_name: "max",
    role: "NP,AR",
    state_name: "NY",
    active_date: "2022/08/07",
    collab_status: "Not submitted",
  },
  {
    collaborator_name: "mary",
    role: "NP",
    state_name: "NY",
    active_date: "2022/11/27",
    collab_status: "Submitted",
  },
  {
    collaborator_name: "vilma",
    role: "NP,CCP,DNM,BPM,HJK",
    state_name: "TX",
    active_date: "2021/08/07",
    collab_status: "Not submitted",
  },
  {
    collaborator_name: "gideon",
    role: "NP,CNM",
    state_name: "OZ",
    active_date: "2022/12/21",
    collab_status: "Not submitted",
  },
  {
    collaborator_name: "lorry",
    role: "NP",
    state_name: "NY",
    active_date: "2022/10/03",
    collab_status: "Submitted",
  },
  {
    collaborator_name: "brad",
    role: "NP,LLK,JHK,MNG",
    state_name: "CA",
    active_date: "2021/08/07",
    collab_status: "Submitted",
  },
  {
    collaborator_name: "max",
    role: "NP,AR",
    state_name: "NY",
    active_date: "2022/08/07",
    collab_status: "Not submitted",
  },
  {
    collaborator_name: "mary",
    role: "NP",
    state_name: "NY",
    active_date: "2022/11/27",
    collab_status: "Submitted",
  },
  {
    collaborator_name: "vilma",
    role: "NP,CCP,DNM,BPM,HJK",
    state_name: "TX",
    active_date: "2021/08/07",
    collab_status: "Not submitted",
  },
  {
    collaborator_name: "gideon",
    role: "NP,CNM",
    state_name: "OZ",
    active_date: "2022/12/21",
    collab_status: "Not submitted",
  },
  {
    collaborator_name: "lorry",
    role: "NP",
    state_name: "NY",
    active_date: "2022/10/03",
    collab_status: "Submitted",
  },
  {
    collaborator_name: "brad",
    role: "NP,LLK,JHK,MNG",
    state_name: "CA",
    active_date: "2021/08/07",
    collab_status: "Submitted",
  },
  {
    collaborator_name: "max",
    role: "NP,AR",
    state_name: "NY",
    active_date: "2022/08/07",
    collab_status: "Not submitted",
  },
  {
    collaborator_name: "mary",
    role: "NP",
    state_name: "NY",
    active_date: "2022/11/27",
    collab_status: "Submitted",
  },
  {
    collaborator_name: "vilma",
    role: "NP,CCP,DNM,BPM,HJK",
    state_name: "TX",
    active_date: "2021/08/07",
    collab_status: "Not submitted",
  },
  {
    collaborator_name: "gideon",
    role: "NP,CNM",
    state_name: "OZ",
    active_date: "2022/12/21",
    collab_status: "Not submitted",
  },
  {
    collaborator_name: "lorry",
    role: "NP",
    state_name: "NY",
    active_date: "2022/10/03",
    collab_status: "Submitted",
  },
  {
    collaborator_name: "brad",
    role: "NP,LLK,JHK,MNG",
    state_name: "CA",
    active_date: "2021/08/07",
    collab_status: "Submitted",
  },
  {
    collaborator_name: "max",
    role: "NP,AR",
    state_name: "NY",
    active_date: "2022/08/07",
    collab_status: "Not submitted",
  },
  {
    collaborator_name: "mary",
    role: "NP",
    state_name: "NY",
    active_date: "2022/11/27",
    collab_status: "Submitted",
  },
  {
    collaborator_name: "vilma",
    role: "NP,CCP,DNM,BPM,HJK",
    state_name: "TX",
    active_date: "2021/08/07",
    collab_status: "Not submitted",
  },
];

const documents = [
  {
    doc_name: "vishnu_document",
    collaborator_name: "vishnu",
    state_name: "NY",
    doc_size: "500kb",
    active_date: "2022/05/12",
    doc_url: "https://picsum.photos/200/300",
  },
  {
    doc_name: "roshan_document",
    collaborator_name: "roshan",
    state_name: "NY",
    doc_size: "80kb",
    active_date: "2022/05/12",
    doc_url:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    doc_name: "rohan_document",
    collaborator_name: "rohan",
    state_name: "NY",
    doc_size: "100kb",
    active_date: "2022/05/12",
    doc_url:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
];

const users = [
  {
    first_name: 'Vishnu',
    last_name: 'Roshan',
    user_type: 'APC',
    email: 'vish@dd.com',
  },
  {
    first_name: 'damian',
    last_name: 'Wayne',
    user_type: 'APC',
    email: 'redhood@dd.com',
  },
  {
    first_name: 'Bruce',
    last_name: 'Wayne',
    user_type: 'APC',
    email: 'bat@dd.com',
  },
  {
    first_name: 'Clark',
    last_name: 'kent',
    user_type: 'APC',
    email: 'super@dd.com',
  },
];
authController.forgotPassword = ({ email }) => {
  if (email === "frg200@gmail.com")
    return {
      link: "http://localhost:4200/account/reset-password/200",
      status: 200,
      message: "mail sent to email. please check",
    };
  if (email === "frg404@gmail.com")
    return { status: 404, message: "email not found" };
  if (email === "frg500@gmail.com")
    return { status: 500, message: "something went wrong" };
};

authController.login = ({ username, password }) => {
  //   new Promise((resolve, reject) => {
  let result;
  if (username === "frg200@gmail.com")
    result = {
      status: 200,
      message: "successful",
      jwt: "some random jwt token",
      user: {
        id: 4,
        username: "frg200@gmail.com",
        email: "frg200@gmail.com",
        mobile: "923358765129",
        user_type: "ZIVIAN_ADMIN",
      },
    };
  if (username === "frg404@gmail.com")
    result = { status: 404, message: "user not found" };
  if (username === "frg401@gmail.com")
    result = { status: 401, message: "unauthorized" };
  if (username === "frg500@gmail.com")
    result = { status: 500, message: "something went wrong" };

  //   setTimeout(resolve(result), 3000);
  return result;
  //   });
};
authController.resetPassword = ({ token, password }) => {
  if (token === "200" || "reset-token")
    return { status: 200, message: "successful" };
  if (token === "404") return { status: 404, message: "unauthorized" };
  if (token === "500") return { status: 401, message: "something went wrong!" };
};

authController.verifyUser = ({ token }) => {
  if (token === "200") return { status: 200, message: "successful" };
  if (token === "404") return { status: 404, message: "unauthorized" };
  if (token === "500") return { status: 401, message: "something went wrong!" };
};

authController.listApi = ({ page = 1, limit = 10, search, filters }) => {
  if (page === 0) page = 1;
  return {
    0: {
      collaborator_name: 'max',
      role: 'NP,AR',
      state_name: 'NY',
      active_date: '2022/08/07',
      collab_status: 'Not submitted',
    },
    // message: "success",
    // limit: Number(limit),
    // totalRecords: list.length,
    // page: Number(page),
    // list: list.slice((page - 1) * limit, page * limit),

    // list: [],
  };
};

authController.documentApi = ({ page = 1, limit = 10, search, filters }) => {
  if (page === 0) page = 1;
  return {
    message: "success",
    limit: Number(limit),
    totalRecords: documents.length,
    page: Number(page),
    list: documents.slice((page - 1) * limit, page * limit),
    // list: [],
  };
};

authController.usersApi = ({ page = 1, limit = 10, search, filters }) => {
  if (page === 0) page = 1;
  return {
    message: 'success',
    limit: Number(limit),
    totalRecords: documents.length,
    page: Number(page),
    list: users.slice((page - 1) * limit, page * limit),
    // list: [],
  };
};

authController.getAllFilters = () => {
  return {
    collaborators: [
      {
        display: "Vishnu",
        value: "vishnuroshan",
      },
      {
        display: "Roshan",
        value: "roshan",
      },
    ],
    countries: [
      {
        country_code: "+1",
        country_name: "USA",
      },
    ],
    states: [
      {
        state_code: "1",
        state_name: "Alabama",
      },
      {
        state_code: "2",
        state_name: "Alaska",
      },
      {
        state_code: "4",
        state_name: "Arizona",
      },
      {
        state_code: "5",
        state_name: "Arkansas",
      },
      {
        state_code: "6",
        state_name: "California",
      },
    ],
    roles: [
      { value: "SUPER_ADMIN", display: "Super Admin" },
      { value: "Zivian_ADMIN", display: "Zivian Admin" },
      { value: "APC", display: "APC" },
      { value: "MD_OR_DO", display: "MD/DO" },
    ],
    statuses: [
      { value: "COMPLETED", display: "Completed" },
      { value: "NOT_SUBMITTED", display: "Not Submitted" },
      { value: "STATUS_1", display: "Status 1" },
      { value: "STATUS_2", display: "Status 2" },
    ],
  };
};

authController.getUser = ({ id }) => {
  return {
    user: {
      id,
      general_info: {
        first_name: "Jane",
        last_name: "Smith",
        middle_name: "Doe",
        dob: "07/16/1996",
        ssn: "12345678",
        address: "OH,44236,Hudson,1234 Dabury Ln",
        emails: ["email1@gmail.com", "email2@gmail.com"],
        phone: "330-555-55555",
        provider_type: "APC",
        suffix: "pre",
        npi: "12345678",
        specialty: "surgeon",
      },
      school: {
        school_name: "Lorem ipsum",
        start_date: "10/10/2011",
        end_date: "10/10/2016",
        graduation_type: "Full Time",
        completed: true,
        certification_type: "full time",
        board: "CBSC",
      },
      training: {
        institution: "some institution",
        start_date: "10/10/2011",
        end_date: "10/10/2016",
        completed: true,
      },
      certification: {
        certification: "very good certification",
        certificate_number: "123456",
        specialty: "heart",
      },
      work_history: {
        job_title: "general physician",
        start_date: "10/10/2011",
        end_date: "10/10/2016",
      },

      dea: { dea_number: "12345678", last_updated: "10/10/2011" },
      license: {
        state: "OH",
        type: "some type",
        status: "expired",
        issued_date: "10/10/2011",
        expiration_date: "10/10/2011",
        license_number: "12345678",
      },
    },
  };
};

authController.listing;
module.exports = authController;
