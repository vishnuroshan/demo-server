const authController = {};
const shortId = require('shortid');
const list = [
  {
    collaborator_name: 'vishnuroshan',
    role: 'NP',
    state_name: 'NY',
    active_date: '2022/12/21',
    collab_status: 'Submitted',
    id: shortId(),
  },
  {
    collaborator_name: 'gideon',
    role: 'NP,CNM',
    state_name: 'OZ',
    active_date: '2022/12/21',
    collab_status: 'Not submitted',
  },
  {
    collaborator_name: 'lorry',
    role: 'NP',
    state_name: 'NY',
    active_date: '2022/10/03',
    collab_status: 'Submitted',
    id: shortId(),
  },
  {
    collaborator_name: 'brad',
    role: 'NP,LLK,JHK,MNG',
    state_name: 'CA',
    active_date: '2021/08/07',
    collab_status: 'Submitted',
    id: shortId(),
  },
  {
    collaborator_name: 'max',
    role: 'NP,AR',
    state_name: 'NY',
    active_date: '2022/08/07',
    collab_status: 'Not submitted',
  },
  {
    collaborator_name: 'mary',
    role: 'NP',
    state_name: 'NY',
    active_date: '2022/11/27',
    collab_status: 'Submitted',
    id: shortId(),
  },
  {
    collaborator_name: 'vilma',
    role: 'KLKLKLK',
    state_name: 'TX',
    active_date: '2021/08/07',
    collab_status: 'Not submitted',
  },
  {
    collaborator_name: 'gideon',
    role: 'NP,CNM',
    state_name: 'OZ',
    active_date: '2022/12/21',
    collab_status: 'Not submitted',
  },
  {
    collaborator_name: 'lorry',
    role: 'NP',
    state_name: 'NY',
    active_date: '2022/10/03',
    collab_status: 'Submitted',
    id: shortId(),
  },
  {
    collaborator_name: 'brad',
    role: 'NP,LLK,JHK,MNG',
    state_name: 'CA',
    active_date: '2021/08/07',
    collab_status: 'Submitted',
    id: shortId(),
  },
  {
    collaborator_name: 'max',
    role: 'NP,AR',
    state_name: 'NY',
    active_date: '2022/08/07',
    collab_status: 'Not submitted',
  },
  {
    collaborator_name: 'mary',
    role: 'NP',
    state_name: 'NY',
    active_date: '2022/11/27',
    collab_status: 'Submitted',
    id: shortId(),
  },
  {
    collaborator_name: 'vilma',
    role: 'NP,CCP,DNM,BPM,HJK',
    state_name: 'TX',
    active_date: '2021/08/07',
    collab_status: 'Not submitted',
  },
  {
    collaborator_name: 'gideon',
    role: 'NP,CNM',
    state_name: 'OZ',
    active_date: '2022/12/21',
    collab_status: 'Not submitted',
  },
  {
    collaborator_name: 'lorry',
    role: 'NP',
    state_name: 'NY',
    active_date: '2022/10/03',
    collab_status: 'Submitted',
    id: shortId(),
  },
  {
    collaborator_name: 'brad',
    role: 'NP,LLK,JHK,MNG',
    state_name: 'CA',
    active_date: '2021/08/07',
    collab_status: 'Submitted',
    id: shortId(),
  },
  {
    collaborator_name: 'max',
    role: 'NP,AR',
    state_name: 'NY',
    active_date: '2022/08/07',
    collab_status: 'Not submitted',
  },
  {
    collaborator_name: 'mary',
    role: 'NP',
    state_name: 'NY',
    active_date: '2022/11/27',
    collab_status: 'Submitted',
    id: shortId(),
  },
  {
    collaborator_name: 'vilma',
    role: 'NP,CCP,DNM,BPM,HJK',
    state_name: 'TX',
    active_date: '2021/08/07',
    collab_status: 'Not submitted',
  },
  {
    collaborator_name: 'gideon',
    role: 'NP,CNM',
    state_name: 'OZ',
    active_date: '2022/12/21',
    collab_status: 'Not submitted',
  },
  {
    collaborator_name: 'lorry',
    role: 'NP',
    state_name: 'NY',
    active_date: '2022/10/03',
    collab_status: 'Submitted',
    id: shortId(),
  },
  {
    collaborator_name: 'brad',
    role: 'NP,LLK,JHK,MNG',
    state_name: 'CA',
    active_date: '2021/08/07',
    collab_status: 'Submitted',
    id: shortId(),
  },
  {
    collaborator_name: 'max',
    role: 'NP,AR',
    state_name: 'NY',
    active_date: '2022/08/07',
    collab_status: 'Not submitted',
  },
  {
    collaborator_name: 'mary',
    role: 'NP',
    state_name: 'NY',
    active_date: '2022/11/27',
    collab_status: 'Submitted',
    id: shortId(),
  },
  {
    collaborator_name: 'vilma',
    role: 'NP,CCP,DNM,BPM,HJK',
    state_name: 'TX',
    active_date: '2021/08/07',
    collab_status: 'Not submitted',
  },
  {
    collaborator_name: 'gideon',
    role: 'NP,CNM',
    state_name: 'OZ',
    active_date: '2022/12/21',
    collab_status: 'Not submitted',
  },
  {
    collaborator_name: 'lorry',
    role: 'NP',
    state_name: 'NY',
    active_date: '2022/10/03',
    collab_status: 'Submitted',
    id: shortId(),
  },
  {
    collaborator_name: 'brad',
    role: 'NP,LLK,JHK,MNG',
    state_name: 'CA',
    active_date: '2021/08/07',
    collab_status: 'Submitted',
    id: shortId(),
  },
  {
    collaborator_name: 'max',
    role: 'NP,AR',
    state_name: 'NY',
    active_date: '2022/08/07',
    collab_status: 'Not submitted',
  },
  {
    collaborator_name: 'mary',
    role: 'NP',
    state_name: 'NY',
    active_date: '2022/11/27',
    collab_status: 'Submitted',
    id: shortId(),
  },
  {
    collaborator_name: 'vilma',
    role: 'NP,CCP,DNM,BPM,HJK',
    state_name: 'TX',
    active_date: '2021/08/07',
    collab_status: 'Not submitted',
  },
  {
    collaborator_name: 'gideon',
    role: 'NP,CNM',
    state_name: 'OZ',
    active_date: '2022/12/21',
    collab_status: 'Not submitted',
  },
  {
    collaborator_name: 'lorry',
    role: 'NP',
    state_name: 'NY',
    active_date: '2022/10/03',
    collab_status: 'Submitted',
    id: shortId(),
  },
  {
    collaborator_name: 'brad',
    role: 'NP,LLK,JHK,MNG',
    state_name: 'CA',
    active_date: '2021/08/07',
    collab_status: 'Submitted',
    id: shortId(),
  },
  {
    collaborator_name: 'max',
    role: 'NP,AR',
    state_name: 'NY',
    active_date: '2022/08/07',
    collab_status: 'Not submitted',
  },
  {
    collaborator_name: 'mary',
    role: 'NP',
    state_name: 'NY',
    active_date: '2022/11/27',
    collab_status: 'Submitted',
    id: shortId(),
  },
  {
    collaborator_name: 'vilma',
    role: 'NP,CCP,DNM,BPM,HJK',
    state_name: 'TX',
    active_date: '2021/08/07',
    collab_status: 'Not submitted',
  },
  {
    collaborator_name: 'gideon',
    role: 'NP,CNM',
    state_name: 'OZ',
    active_date: '2022/12/21',
    collab_status: 'Not submitted',
  },
  {
    collaborator_name: 'lorry',
    role: 'NP',
    state_name: 'NY',
    active_date: '2022/10/03',
    collab_status: 'Submitted',
    id: shortId(),
  },
  {
    collaborator_name: 'brad',
    role: 'NP,LLK,JHK,MNG',
    state_name: 'CA',
    active_date: '2021/08/07',
    collab_status: 'Submitted',
    id: shortId(),
  },
  {
    collaborator_name: 'max',
    role: 'NP,AR',
    state_name: 'NY',
    active_date: '2022/08/07',
    collab_status: 'Not submitted',
  },
  {
    collaborator_name: 'mary',
    role: 'NP',
    state_name: 'NY',
    active_date: '2022/11/27',
    collab_status: 'Submitted',
    id: shortId(),
  },
  {
    collaborator_name: 'vilma',
    role: 'NP,CCP,DNM,BPM,HJK',
    state_name: 'TX',
    active_date: '2021/08/07',
    collab_status: 'Not submitted',
  },
  {
    collaborator_name: 'gideon',
    role: 'NP,CNM',
    state_name: 'OZ',
    active_date: '2022/12/21',
    collab_status: 'Not submitted',
  },
  {
    collaborator_name: 'lorry',
    role: 'NP',
    state_name: 'NY',
    active_date: '2022/10/03',
    collab_status: 'Submitted',
    id: shortId(),
  },
  {
    collaborator_name: 'brad',
    role: 'NP,LLK,JHK,MNG',
    state_name: 'CA',
    active_date: '2021/08/07',
    collab_status: 'Submitted',
    id: shortId(),
  },
  {
    collaborator_name: 'max',
    role: 'NP,AR',
    state_name: 'NY',
    active_date: '2022/08/07',
    collab_status: 'Not submitted',
  },
  {
    collaborator_name: 'mary',
    role: 'NP',
    state_name: 'NY',
    active_date: '2022/11/27',
    collab_status: 'Submitted',
    id: shortId(),
  },
  {
    collaborator_name: 'vilma',
    role: 'NP,CCP,DNM,BPM,HJK',
    state_name: 'TX',
    active_date: '2021/08/07',
    collab_status: 'Not submitted',
  },
  {
    collaborator_name: 'gideon',
    role: 'NP,CNM',
    state_name: 'OZ',
    active_date: '2022/12/21',
    collab_status: 'Not submitted',
  },
  {
    collaborator_name: 'lorry',
    role: 'NP',
    state_name: 'NY',
    active_date: '2022/10/03',
    collab_status: 'Submitted',
    id: shortId(),
  },
  {
    collaborator_name: 'brad',
    role: 'NP,LLK,JHK,MNG',
    state_name: 'CA',
    active_date: '2021/08/07',
    collab_status: 'Submitted',
    id: shortId(),
  },
  {
    collaborator_name: 'max',
    role: 'NP,AR',
    state_name: 'NY',
    active_date: '2022/08/07',
    collab_status: 'Not submitted',
  },
  {
    collaborator_name: 'mary',
    role: 'NP',
    state_name: 'NY',
    active_date: '2022/11/27',
    collab_status: 'Submitted',
    id: shortId(),
  },
  {
    collaborator_name: 'vilma',
    role: 'NP,CCP,DNM,BPM,HJK',
    state_name: 'TX',
    active_date: '2021/08/07',
    collab_status: 'Not submitted',
  },
  {
    collaborator_name: 'gideon',
    role: 'NP,CNM',
    state_name: 'OZ',
    active_date: '2022/12/21',
    collab_status: 'Not submitted',
  },
  {
    collaborator_name: 'lorry',
    role: 'NP',
    state_name: 'NY',
    active_date: '2022/10/03',
    collab_status: 'Submitted',
    id: shortId(),
  },
  {
    collaborator_name: 'brad',
    role: 'NP,LLK,JHK,MNG',
    state_name: 'CA',
    active_date: '2021/08/07',
    collab_status: 'Submitted',
    id: shortId(),
  },
  {
    collaborator_name: 'max',
    role: 'NP,AR',
    state_name: 'NY',
    active_date: '2022/08/07',
    collab_status: 'Not submitted',
  },
  {
    collaborator_name: 'mary',
    role: 'NP',
    state_name: 'NY',
    active_date: '2022/11/27',
    collab_status: 'Submitted',
    id: shortId(),
  },
  {
    collaborator_name: 'vilma',
    role: 'NP,CCP,DNM,BPM,HJK',
    state_name: 'TX',
    active_date: '2021/08/07',
    collab_status: 'Not submitted',
  },
];

const documents = [
  {
    doc_name: 'vishnu_document',
    collaborator_name: 'vishnu',
    state_name: 'NY',
    doc_size: '500kb',
    active_date: '2022/05/12',
    doc_url: 'https://picsum.photos/200/300',
  },
  {
    doc_name: 'roshan_document',
    collaborator_name: 'roshan',
    state_name: 'NY',
    doc_size: '80kb',
    active_date: '2022/05/12',
    doc_url:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  {
    doc_name: 'rohan_document',
    collaborator_name: 'rohan',
    state_name: 'NY',
    doc_size: '100kb',
    active_date: '2022/05/12',
    doc_url:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
];

let users = [
  {
    id: shortId(),
    first_name: 'Vishnu',
    last_name: 'Roshan',
    mobile: '9984561234',
    user_type: 'SUPER_ADMIN',
    email: 'vish@dd.com',
  },
  {
    id: shortId(),
    first_name: 'damian',
    last_name: 'Wayne',
    mobile: '9984561234',
    user_type: 'ZIVIAN_ADMIN',
    email: 'redhood@dd.com',
  },
  {
    id: shortId(),
    first_name: 'Bruce',
    last_name: 'Wayne',
    mobile: '9984561234',
    user_type: 'ZIVIAN_ADMIN',
    email: 'bat@dd.com',
  },
  {
    id: shortId(),
    first_name: 'Clark',
    last_name: 'kent',
    mobile: '9984561234',
    user_type: 'SUPER_ADMIN',
    email: 'super@dd.com',
  },
];
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
  //   new Promise((resolve, reject) => {
  let result;
  if (username === 'frg200@gmail.com')
    result = {
      status: 200,
      message: 'successful',
      jwt: 'some random jwt token',
      user: {
        id: 4,
        username: 'frg200@gmail.com',
        email: 'frg200@gmail.com',
        mobile: '923358765129',
        user_type: 'ZIVIAN_ADMIN',
      },
    };
  if (username === 'frg404@gmail.com')
    result = { status: 404, message: 'user not found' };
  if (username === 'frg401@gmail.com')
    result = { status: 401, message: 'unauthorized' };
  if (username === 'frg500@gmail.com')
    result = { status: 500, message: 'something went wrong' };

  //   setTimeout(resolve(result), 3000);
  return result;
  //   });
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
    // 0: {
    //   collaborator_name: 'max',
    //   role: 'NP,AR',
    //   state_name: 'NY',
    //   active_date: '2022/08/07',
    //   collab_status: 'Not submitted',
    // },
    message: 'success',
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
    message: 'success',
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
    totalRecords: users.length,
    page: Number(page),
    list: users.slice((page - 1) * limit, page * limit),
    // list: [],
  };
};

authController.getAllFilters = () => {
  return {
    collaborators: [
      {
        display: 'Vishnu',
        value: 'vishnuroshan',
      },
      {
        display: 'Roshan',
        value: 'roshan',
      },
    ],
    countries: [
      {
        country_code: '+1',
        country_name: 'USA',
      },
    ],
    states: [
      {
        state_code: '1',
        state_name: 'Alabama',
      },
      {
        state_code: '2',
        state_name: 'Alaska',
      },
      {
        state_code: '4',
        state_name: 'Arizona',
      },
      {
        state_code: '5',
        state_name: 'Arkansas',
      },
      {
        state_code: '6',
        state_name: 'California',
      },
    ],
    roles: [
      { value: 'SUPER_ADMIN', display: 'Super Admin' },
      { value: 'Zivian_ADMIN', display: 'Zivian Admin' },
      { value: 'APC', display: 'APC' },
      { value: 'MD_OR_DO', display: 'MD/DO' },
    ],
    statuses: [
      { value: 'COMPLETED', display: 'Completed' },
      { value: 'NOT_SUBMITTED', display: 'Not Submitted' },
      { value: 'STATUS_1', display: 'Status 1' },
      { value: 'STATUS_2', display: 'Status 2' },
    ],
  };
};

authController.getUser = ({ id }) => {
  return {
    id: 3,
    username: 'alexa.malinowski@verifiable.com',
    email: 'alexa.malinowski@verifiable.com',
    user_type: 'APC',
    apc_profile: {
      id: 6,
      created_at: '2022-10-07T09:20:34.854688Z',
      updated_at: '2022-10-07T09:20:34.854725Z',
      zivian_user: 3,
      city: 2,
      state: null,
      country: null,
    },
    md_do_profile: {
      id: 2,
      created_at: '2022-10-19T17:12:59.515874Z',
      updated_at: '2022-10-19T17:12:59.515888Z',
      zivian_user: 15,
      city: null,
      state: null,
      country: null,
    },
    verifiable_records: {
      id: 3,
      // general info
      email: 'alexa.malinowski@verifiable.com',
      email_type: 'Unspecified',
      phone: '666-666-6666',
      verifiable_id: '85d74c46-2470-4176-8245-29db95831324',
      npi: '4082424803',
      first_name: 'Alexa',
      last_name: 'Malinowski',
      date_of_birth: '1980-09-12',
      credentialing_status: 'CREATED',
      created_at: '2022-10-07T17:44:34.760537Z',
      updated_at: '2022-10-07T17:44:34.760698Z',

      zivian_user: 3,
      apc_user: 6,
      md_do_user: null,
      caqh_data: '',
      // license
      licenses_data: {
        id: 5,
        license_json: [
          {
            id: '3eff176c-ede6-4acc-a8b1-1e4ad7e18293',
            state: 'GA',
            isPrimary: false,
            jobStatus: 'Idle',
            providerId: '09f924e5-48e5-4203-beb0-51385844b667',
            licenseType: {
              id: '47ab732e-478c-45c1-bfcf-2947add3d458',
              name: 'Doctor of Osteopathy',
              states: [
                'AL',
                'AK',
                'AZ',
                'AR',
                'CA',
                'CO',
                'CT',
                'DE',
                'DC',
                'FL',
                'GA',
                'HI',
                'ID',
                'IL',
                'IN',
                'IA',
                'KS',
                'KY',
                'LA',
                'ME',
                'MD',
                'MA',
                'MI',
                'MN',
                'MS',
                'MO',
                'MT',
                'NE',
                'NV',
                'NH',
                'NJ',
                'NM',
                'NY',
                'NC',
                'ND',
                'OH',
                'OK',
                'OR',
                'PA',
                'RI',
                'SC',
                'SD',
                'TN',
                'TX',
                'UT',
                'VT',
                'VA',
                'WA',
                'WV',
                'WI',
                'WY',
              ],
              aliases: [
                'Physician',
                'Allopathic and Osteopathic Physicians',
                'Osteopathic Surgeon',
                'Surgeon',
                'Medicine',
                'Physician and Surgeon',
                'Osteopathic Physician',
                'Medical',
                'Physician D.O.',
                'Doctor of Osteopathy',
                'TEMPORARY EDUCATIONAL PERMIT',
                'DO Permanent',
                'Physician License',
                'Osteopathic Physician & Surgeon',
                'Compact License - D.O.',
                'Doctor of Osteopathy Telemedicine',
                'Osteopathic Physician (DO)',
                'Physician & Surgeon',
                'D.O.',
                'Osteopathic Physician and Surgeon',
                'Medical',
                'Physician / Surgeon',
                'OSTEOPATHY AND SURGERY',
                'MEDICAL BOARD',
                'Doctor of Osteopathy (DO)',
                'Physicians',
                'Osteopathy Phys & Surgeon',
                'Medicine (physician, including MDs & DOs)',
                'DO',
                'Doctor of Osteopathic Medicine (DO)',
                'Physician (MD/DO)',
                'Medical Board - All',
                'Osteopathic Medicine',
                'Osteopathic Physician & Surgeon License - OP',
                'Medicine and Surgery, DO (21)',
                'MED - Medical Doctor License',
                'Osteopathic Physician',
                'Osteopathic Physician & Surgeon',
                'Osteopathy',
                'O - OSTEOPATHIC PHYSICIAN AND SURGEON',
                'Osteopathic Physician and Surgeon 20a',
                'Osteopathic Physician & Surgeon Limited License - OL',
                'Osteopathic Physician & Surgeon Temporary Permit - TO',
                'Osteopathic Physician and Surgeon License Interstate Medical Licensure Compact - OP',
                'Doctors of Osteopathic Medicine',
                'Compact Physician',
                'Medical License (Md/Do)',
                'Physician/Surgeon',
                'Physician-Osteopathic Doctor',
                'Licensed Physician and Surgeon',
                'Do Postgraduate',
                'Do Visiting Physician Privileges',
                'Do Special',
                'Osteopathic Physician & Surgeon License',
                'DOCTOR OF OSTEOPATHIC MEDICINE',
              ],
              taxonomy: 'X2000000DO',
              abbreviations: ['DO'],
            },
            licenseNumber: '77604',
            approvedStatus: 'Pending',
            restrictionStatus: 'None',
            currentVerification: {
              id: 'e6fc05e3-b003-43cc-b148-341086487e19',
              export:
                '/verifications/e6fc05e3-b003-43cc-b148-341086487e19/export.pdf',
              status: 'Found',
              results: [
                {
                  name: 'Sang Quang Dao',
                  issued: '2017-03-09T00:00:00+00:00',
                  expires: '2024-03-31T00:00:00+00:00',
                  problems: [],
                  licenseType: 'Physician',
                  screenshots: [
                    '/verifications/e6fc05e3-b003-43cc-b148-341086487e19/0/screenshot1.png',
                  ],
                  licenseNumber: '77604',
                  licenseStatus: 'Active',
                  additionalProperties: {
                    data: {
                      County: 'Gwinnett',
                      Designation: 'DO',
                      Specialties: {
                        data: [
                          {
                            'Certifying Board': 'ABFM',
                            'Primary Specialty?': 'Y',
                            'Specialty/Subspecialty': 'Family Medicine',
                          },
                        ],
                        type: 'Table',
                      },
                      'Practice Address':
                        '2690 Hamilton Mill Rd Suite 100 Buford GA  30519',
                      'Related Licenses': {
                        data: [
                          {
                            License: 'Physician Assistant #7883',
                            'End Date': '',
                            'Since Date': '9/14/2018',
                            'License Status': 'Active',
                            'Relationship/Name':
                              'PA Supervisor: Thomas, Autumn Janee',
                          },
                          {
                            License: 'Physician Assistant #7883',
                            'End Date': '',
                            'Since Date': '8/1/2022',
                            'License Status': 'Active',
                            'Relationship/Name':
                              'PA Supervisor: Neggia, Susan Elizabeth',
                          },
                        ],
                        type: 'Table',
                      },
                      'Medicaid/Medicare': {
                        data: [
                          {
                            'Currently Accepting Medicaid Patients?': 'Y',
                            'Currently Accepting Medicare Patients?': 'Y',
                          },
                        ],
                        type: 'Table',
                      },
                      'Education/Certifications': {
                        data: [
                          {
                            To: '',
                            From: '',
                            Graduated: '06/20/2015',
                            'School Name': 'GA-PCOM',
                            'School Type': 'Medical School',
                          },
                        ],
                        type: 'Table',
                      },
                      'Graduate Medical Education': {
                        data: [
                          {
                            To: '',
                            From: '',
                            Country: '',
                            Graduated: '',
                            'City/State/Zip': 'Lawrenceville GA 30046',
                            'GME/Hospital Name': 'Gwinnett Medical Center',
                            'Program Type/Specialty': 'Family Medicine',
                          },
                          {
                            To: '',
                            From: '',
                            Country: '',
                            Graduated: '',
                            'City/State/Zip': '',
                            'GME/Hospital Name': 'Family Medicine',
                            'Program Type/Specialty': '',
                          },
                          {
                            To: '',
                            From: '08/01/2015',
                            Country: '',
                            Graduated: '',
                            'City/State/Zip': '',
                            'GME/Hospital Name': '',
                            'Program Type/Specialty': '',
                          },
                          {
                            To: '05/17/2017',
                            From: '',
                            Country: 'US',
                            Graduated: '',
                            'City/State/Zip': 'Lawrenceville GA',
                            'GME/Hospital Name': '',
                            'Program Type/Specialty': '',
                          },
                        ],
                        type: 'Table',
                      },
                    },
                    type: 'Form',
                  },
                },
              ],
              started: '2022-10-06T14:27:32.633736Z',
              trigger: 'Manual',
              originalStatus: 'Found',
              processingTime: 29477,
              correctResultIndex: 0,
              verificationSource: {
                url: 'https://gcmb.mylicense.com/verification/',
                name: 'Georgia Composite Medical Board',
              },
            },
            isCurrentlyPracticing: true,
            currentVerificationStatus: 'Found',
          },
        ],
        created_at: '2022-10-21T11:17:12.270680Z',
        updated_at: '2022-10-21T11:17:12.270696Z',
        zivian_user: 10,
        verifiable_record: 6,
      },
      training_data: '',
      work_history_data: '',
      certificates_data: '',
      education_data: [
        {
          id: 2,
          graduateType: 'Professional',
          schoolName: 'Philadelphia College of Osteopathic Medicine',
          startDate: '2011-08-01T00:00:00Z',
          endDate: '2015-05-01T00:00:00Z',
          degree: 'DO',
          education_id: 'f98ddfc1-b643-46f7-be70-eedbd08fa237',
          lastUpdatedAt: '2022-10-06T14:27:32.778532Z',
          created_at: '2022-10-21T11:17:12.261948Z',
          updated_at: '2022-10-21T11:17:12.261964Z',
          zivian_user: 10,
          verifiable_record: 6,
        },
      ],
      // dea
      dea_registrations_data: [
        {
          id: 3,
          providerId: '09f924e5-48e5-4203-beb0-51385844b667',
          registrationNumber: 'FD6687846',
          created_at: '2022-10-21T11:17:12.280174Z',
          updated_at: '2022-10-21T11:17:12.280189Z',
          zivian_user: 10,
          verifiable_record: 6,
        },
      ],
    },
  };
  // return {
  //   user: {
  //     id,
  //     general_info: {
  //       first_name: 'Jane',
  //       last_name: 'Smith',
  //       middle_name: 'Doe',
  //       dob: '07/16/1996',
  //       ssn: '12345678',
  //       address: 'OH,44236,Hudson,1234 Dabury Ln',
  //       emails: ['email1@gmail.com', 'email2@gmail.com'],
  //       phone: '330-555-55555',
  //       provider_type: 'APC',
  //       suffix: 'pre',
  //       npi: '12345678',
  //       specialty: 'surgeon',
  //     },
  //     school: {
  //       school_name: 'Lorem ipsum',
  //       start_date: '10/10/2011',
  //       end_date: '10/10/2016',
  //       graduation_type: 'Full Time',
  //       completed: true,
  //       certification_type: 'full time',
  //       board: 'CBSC',
  //     },
  //     training: {
  //       institution: 'some institution',
  //       start_date: '10/10/2011',
  //       end_date: '10/10/2016',
  //       completed: true,
  //     },
  //     certification: {
  //       certification: 'very good certification',
  //       certificate_number: '123456',
  //       specialty: 'heart',
  //     },
  //     work_history: {
  //       job_title: 'general physician',
  //       start_date: '10/10/2011',
  //       end_date: '10/10/2016',
  //     },

  //     dea: { dea_number: '12345678', last_updated: '10/10/2011' },
  //     license: {
  //       state: 'OH',
  //       type: 'some type',
  //       status: 'expired',
  //       issued_date: '10/10/2011',
  //       expiration_date: '10/10/2011',
  //       license_number: '12345678',
  //     },
  //   },
  // };
};

authController.createUser = (user) => {
  users.push({ id: shortId(), ...user });
};

authController.updateUser = (user) => {
  users = users.filter((e) => e.id !== user.id);
  users.push({ id: user.id, ...user });
};

authController.listing;
module.exports = authController;
