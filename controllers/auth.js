const authController = {};
const list = [
  {
    name: "vishnuroshan",
    role: "NP",
    state: "NY",
    dateActive: "18/07/2022",
    status: "Submitted",
  },
  {
    name: "gideon",
    role: "NP,CNM",
    state: "OZ",
    dateActive: "18/07/2022",
    status: "Not submitted",
  },
  {
    name: "lorry",
    role: "NP",
    state: "NY",
    dateActive: "09/05/2022",
    status: "Submitted",
  },
  {
    name: "brad",
    role: "NP,LLK,JHK,MNG",
    state: "CA",
    dateActive: "09/09/2022",
    status: "Submitted",
  },
  {
    name: "max",
    role: "NP,AR",
    state: "NY",
    dateActive: "09/07/2022",
    status: "Not submitted",
  },
  {
    name: "mary",
    role: "NP",
    state: "NY",
    dateActive: "22/07/2022",
    status: "Submitted",
  },
  {
    name: "vilma",
    role: "KLKLKLK",
    state: "TX",
    dateActive: "09/09/2022",
    status: "Not submitted",
  },
  {
    name: "gideon",
    role: "NP,CNM",
    state: "OZ",
    dateActive: "18/07/2022",
    status: "Not submitted",
  },
  {
    name: "lorry",
    role: "NP",
    state: "NY",
    dateActive: "09/05/2022",
    status: "Submitted",
  },
  {
    name: "brad",
    role: "NP,LLK,JHK,MNG",
    state: "CA",
    dateActive: "09/09/2022",
    status: "Submitted",
  },
  {
    name: "max",
    role: "NP,AR",
    state: "NY",
    dateActive: "09/07/2022",
    status: "Not submitted",
  },
  {
    name: "mary",
    role: "NP",
    state: "NY",
    dateActive: "22/07/2022",
    status: "Submitted",
  },
  {
    name: "vilma",
    role: "NP,CCP,DNM,BPM,HJK",
    state: "TX",
    dateActive: "09/09/2022",
    status: "Not submitted",
  },
  {
    name: "gideon",
    role: "NP,CNM",
    state: "OZ",
    dateActive: "18/07/2022",
    status: "Not submitted",
  },
  {
    name: "lorry",
    role: "NP",
    state: "NY",
    dateActive: "09/05/2022",
    status: "Submitted",
  },
  {
    name: "brad",
    role: "NP,LLK,JHK,MNG",
    state: "CA",
    dateActive: "09/09/2022",
    status: "Submitted",
  },
  {
    name: "max",
    role: "NP,AR",
    state: "NY",
    dateActive: "09/07/2022",
    status: "Not submitted",
  },
  {
    name: "mary",
    role: "NP",
    state: "NY",
    dateActive: "22/07/2022",
    status: "Submitted",
  },
  {
    name: "vilma",
    role: "NP,CCP,DNM,BPM,HJK",
    state: "TX",
    dateActive: "09/09/2022",
    status: "Not submitted",
  },
  {
    name: "gideon",
    role: "NP,CNM",
    state: "OZ",
    dateActive: "18/07/2022",
    status: "Not submitted",
  },
  {
    name: "lorry",
    role: "NP",
    state: "NY",
    dateActive: "09/05/2022",
    status: "Submitted",
  },
  {
    name: "brad",
    role: "NP,LLK,JHK,MNG",
    state: "CA",
    dateActive: "09/09/2022",
    status: "Submitted",
  },
  {
    name: "max",
    role: "NP,AR",
    state: "NY",
    dateActive: "09/07/2022",
    status: "Not submitted",
  },
  {
    name: "mary",
    role: "NP",
    state: "NY",
    dateActive: "22/07/2022",
    status: "Submitted",
  },
  {
    name: "vilma",
    role: "NP,CCP,DNM,BPM,HJK",
    state: "TX",
    dateActive: "09/09/2022",
    status: "Not submitted",
  },
  {
    name: "gideon",
    role: "NP,CNM",
    state: "OZ",
    dateActive: "18/07/2022",
    status: "Not submitted",
  },
  {
    name: "lorry",
    role: "NP",
    state: "NY",
    dateActive: "09/05/2022",
    status: "Submitted",
  },
  {
    name: "brad",
    role: "NP,LLK,JHK,MNG",
    state: "CA",
    dateActive: "09/09/2022",
    status: "Submitted",
  },
  {
    name: "max",
    role: "NP,AR",
    state: "NY",
    dateActive: "09/07/2022",
    status: "Not submitted",
  },
  {
    name: "mary",
    role: "NP",
    state: "NY",
    dateActive: "22/07/2022",
    status: "Submitted",
  },
  {
    name: "vilma",
    role: "NP,CCP,DNM,BPM,HJK",
    state: "TX",
    dateActive: "09/09/2022",
    status: "Not submitted",
  },
  {
    name: "gideon",
    role: "NP,CNM",
    state: "OZ",
    dateActive: "18/07/2022",
    status: "Not submitted",
  },
  {
    name: "lorry",
    role: "NP",
    state: "NY",
    dateActive: "09/05/2022",
    status: "Submitted",
  },
  {
    name: "brad",
    role: "NP,LLK,JHK,MNG",
    state: "CA",
    dateActive: "09/09/2022",
    status: "Submitted",
  },
  {
    name: "max",
    role: "NP,AR",
    state: "NY",
    dateActive: "09/07/2022",
    status: "Not submitted",
  },
  {
    name: "mary",
    role: "NP",
    state: "NY",
    dateActive: "22/07/2022",
    status: "Submitted",
  },
  {
    name: "vilma",
    role: "NP,CCP,DNM,BPM,HJK",
    state: "TX",
    dateActive: "09/09/2022",
    status: "Not submitted",
  },
  {
    name: "gideon",
    role: "NP,CNM",
    state: "OZ",
    dateActive: "18/07/2022",
    status: "Not submitted",
  },
  {
    name: "lorry",
    role: "NP",
    state: "NY",
    dateActive: "09/05/2022",
    status: "Submitted",
  },
  {
    name: "brad",
    role: "NP,LLK,JHK,MNG",
    state: "CA",
    dateActive: "09/09/2022",
    status: "Submitted",
  },
  {
    name: "max",
    role: "NP,AR",
    state: "NY",
    dateActive: "09/07/2022",
    status: "Not submitted",
  },
  {
    name: "mary",
    role: "NP",
    state: "NY",
    dateActive: "22/07/2022",
    status: "Submitted",
  },
  {
    name: "vilma",
    role: "NP,CCP,DNM,BPM,HJK",
    state: "TX",
    dateActive: "09/09/2022",
    status: "Not submitted",
  },
  {
    name: "gideon",
    role: "NP,CNM",
    state: "OZ",
    dateActive: "18/07/2022",
    status: "Not submitted",
  },
  {
    name: "lorry",
    role: "NP",
    state: "NY",
    dateActive: "09/05/2022",
    status: "Submitted",
  },
  {
    name: "brad",
    role: "NP,LLK,JHK,MNG",
    state: "CA",
    dateActive: "09/09/2022",
    status: "Submitted",
  },
  {
    name: "max",
    role: "NP,AR",
    state: "NY",
    dateActive: "09/07/2022",
    status: "Not submitted",
  },
  {
    name: "mary",
    role: "NP",
    state: "NY",
    dateActive: "22/07/2022",
    status: "Submitted",
  },
  {
    name: "vilma",
    role: "NP,CCP,DNM,BPM,HJK",
    state: "TX",
    dateActive: "09/09/2022",
    status: "Not submitted",
  },
  {
    name: "gideon",
    role: "NP,CNM",
    state: "OZ",
    dateActive: "18/07/2022",
    status: "Not submitted",
  },
  {
    name: "lorry",
    role: "NP",
    state: "NY",
    dateActive: "09/05/2022",
    status: "Submitted",
  },
  {
    name: "brad",
    role: "NP,LLK,JHK,MNG",
    state: "CA",
    dateActive: "09/09/2022",
    status: "Submitted",
  },
  {
    name: "max",
    role: "NP,AR",
    state: "NY",
    dateActive: "09/07/2022",
    status: "Not submitted",
  },
  {
    name: "mary",
    role: "NP",
    state: "NY",
    dateActive: "22/07/2022",
    status: "Submitted",
  },
  {
    name: "vilma",
    role: "NP,CCP,DNM,BPM,HJK",
    state: "TX",
    dateActive: "09/09/2022",
    status: "Not submitted",
  },
  {
    name: "gideon",
    role: "NP,CNM",
    state: "OZ",
    dateActive: "18/07/2022",
    status: "Not submitted",
  },
  {
    name: "lorry",
    role: "NP",
    state: "NY",
    dateActive: "09/05/2022",
    status: "Submitted",
  },
  {
    name: "brad",
    role: "NP,LLK,JHK,MNG",
    state: "CA",
    dateActive: "09/09/2022",
    status: "Submitted",
  },
  {
    name: "max",
    role: "NP,AR",
    state: "NY",
    dateActive: "09/07/2022",
    status: "Not submitted",
  },
  {
    name: "mary",
    role: "NP",
    state: "NY",
    dateActive: "22/07/2022",
    status: "Submitted",
  },
  {
    name: "vilma",
    role: "NP,CCP,DNM,BPM,HJK",
    state: "TX",
    dateActive: "09/09/2022",
    status: "Not submitted",
  },
];

const documents = [
  {
    fileName: "vishnu_document",
    collaboratorName: "vishnu",
    state: "NY",
    fileSize: "500kb",
    date: "10/11/2022",
    action: "https://picsum.photos/200/300",
  },
  {
    fileName: "roshan_document",
    collaboratorName: "roshan",
    state: "NY",
    fileSize: "80kb",
    date: "10/11/2022",
    action:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  },
  {
    fileName: "rohan_document",
    collaboratorName: "rohan",
    state: "NY",
    fileSize: "100kb",
    date: "10/11/2022",
    action:
      "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
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
        user_type: "MD_OR_DO",
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
    message: "success",
    limit: Number(limit),
    totalRecords: list.length,
    page: Number(page),
    list: list.slice((page - 1) * limit, page * limit),
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

authController.getAllFilters = () => {
  return {
    status: 200,
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

authController.listing;
module.exports = authController;
