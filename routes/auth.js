const router = require("express").Router();
const authController = require("../controllers/auth");

router.get("/api/ping", (request, response) => {
  response.set("Access-Control-Allow-Origin", "http://localhost:4200/");
  response.status(200).json({ message: "pong" });
});

router.post("/api/users/forgot-password", (request, response) => {
  const result = authController.forgotPassword(request.body);
  response.set("Access-Control-Allow-Origin", "http://localhost:4200/");
  response.status(200).json(result);
});

router.post("/api/login", (request, response) => {
  const result = authController.login(request.body);
  response.set("Access-Control-Allow-Origin", "http://localhost:4200/");
  response.status(200).json(result);
});
router.post("/api/users/reset-password/:token", (request, response) => {
  response.set("Access-Control-Allow-Origin", "http://localhost:4200/");
  const result = authController.resetPassword({
    ...request.body,
    ...request.params,
  });
  response.status(200).json(result);
});

router.post("/api/users/verify-token/:uid/:token", (request, response) => {
  response.set("Access-Control-Allow-Origin", "http://localhost:4200/");
  const result = authController.verifyUser(request.params);
  response.status(200).json(result);
});

router.get('/api/collaborations-search', (request, response) => {
  response.set('Access-Control-Allow-Origin', 'http://localhost:4200/');
  const result = authController.listApi(request.query);
  response.status(200).json({ ...result });
});
router.get("/api/documents-search", (request, response) => {
  response.set("Access-Control-Allow-Origin", "http://localhost:4200/");
  const result = authController.documentApi(request.query);
  response.status(200).json({ ...result });
});

router.get('/api/collaborations-filter-values', (request, response) => {
  response.set('Access-Control-Allow-Origin', 'http://localhost:4200/');
  const result = authController.getAllFilters();
  response.status(200).json({ ...result });
});

router.get('/api/providers/:id', (request, response) => {
  response.set('Access-Control-Allow-Origin', 'http://localhost:4200/');
  const result = authController.getUser(request.params);
  response.status(200).json(result);
});

// CRUD for admin/super admin users
router.post('/api/zivianusers', (request, response) => {
  response.set('Access-Control-Allow-Origin', 'http://localhost:4200/');
  authController.createUser(request.body);
  response.status(200).json({ message: 'User created'});
});

router.get('/api/zivianusers', (request, response) => {
  response.set('Access-Control-Allow-Origin', 'http://localhost:4200/');
  const result = authController.usersApi(request.query);
  response.status(200).json({ ...result });
});

router.get('/api/zivianusers/:id', (request, response) => {
  response.set('Access-Control-Allow-Origin', 'http://localhost:4200/');
  const result = authController.usersApi(request.params);
  response.status(200).json({ ...result });
});

router.delete('/api/zivianusers/:id', (request, response) => {
  response.set('Access-Control-Allow-Origin', 'http://localhost:4200/');
  response.status(200).json({ message: 'User Deleted' });
});

router.put('/api/zivianusers/:id', (request, response) => {
  response.set('Access-Control-Allow-Origin', 'http://localhost:4200/');
  authController.updateUser(request.body);
  response.status(200).json({ message: 'User updated' });
});

router.get("/api/md-do-search", (request, response) => {
  response.set("Access-Control-Allow-Origin", "http://localhost:4200/");
  const result = authController.getMDDOs(request.query);
  response.status(200).json(result);
});

router.get("/api/apc-search", (request, response) => {
  response.set("Access-Control-Allow-Origin", "http://localhost:4200/");
  const result = authController.getAPCs(request.query);
  
  response.status(200).json(result);
});

router.get('/api/providers-filter-values', (request, response) => {
  response.set('Access-Control-Allow-Origin', 'http://localhost:4200/');
  const result = authController.getProviderFilters();
  response.status(200).json(result);
});

router.get("/api/countries", (request, response) => {
  response.set("Access-Control-Allow-Origin", "http://localhost:4200/");
  response.status(200).json({
    countries: [
      {
        "country_id": 1,
        "country_code": "US",
        "country_name": "United States of America"
      }
    ],
    mgs:'successfully loaded the countries'
  });
});
router.get("/api/states", (request, response) => {
  response.set("Access-Control-Allow-Origin", "http://localhost:4200/");
  response.status(200).json({
    states: [
      {
        "state_id": 1,
        "state_code": "BP",
        "state_name": "Bhopal",
        "country": 1
      },
      {
        "state_id": 2,
        "state_code": "DL",
        "state_name": "Delhi",
        "country": 1
      },
      {
        "state_id": 3,
        "state_code": "KT",
        "state_name": "Karnataka",
        "country": 1
      },
      {
        "state_id": 4,
        "state_code": "KE",
        "state_name": "Kerela",
        "country": 1
      },
      {
        "state_id": 5,
        "state_code": "UP",
        "state_name": "Uttar Pradesh",
        "country": 1
      },
      {
        "state_id": 1,
        "state_code": "AL",
        "state_name": "Altay",
        "country": 4
      },
      {
        "state_id": 2,
        "state_code": "AM",
        "state_name": "Amur",
        "country": 4
      },
      {
        "state_id": 3,
        "state_code": "AR",
        "state_name": "Arkhangelsk",
        "country": 4
      },
      {
        "state_id": 4,
        "state_code": "BS",
        "state_name": "Bashkortostan",
        "country": 4
      },
      {
        "state_id": 5,
        "state_code": "CH",
        "state_name": "Chelyabinsk",
        "country": 4
      }
    ],
    mgs:'successfully loaded the cities'
  });
});
router.get("/api/cities", (request, response) => {
  response.set("Access-Control-Allow-Origin", "http://localhost:4200/");
  response.status(200).json({
    cities: [
      {
        "city_id": 1,
        "city_name": "Bhopal",
        "state": 1,
        "country": 1
      },
      {
        "city_id": 2,
        "city_name": "Delhi",
        "state": 1,
        "country": 1
      },
      {
        "city_id": 3,
        "city_name": "Madhya Pradesh",
        "state": 1,
        "country": 1
      },
      {
        "city_id": 4,
        "city_name": "Uttar Pradesh",
        "state": 1,
        "country": 1
      },
      {
        "city_id": 5,
        "city_name": "Bengaluru",
        "state": 1,
        "country": 1
      }
    ],
    mgs:'successfully loaded the cities'
  });
});
router.get("/api/countries/:id", (request, response) => {
  response.set("Access-Control-Allow-Origin", "http://localhost:4200/");
  console.log('request.params')
  console.log(request.params)
  // const result = authController.verifyUser(request.params);
  response.status(200).json({
    countries: [
      {
        "country_id": 1,
        "country_code": "CH",
        "country_name": "China"
      },
      {
        "country_id": 2,
        "country_code": "AB",
        "country_name": "Abudhabi"
      },
      {
        "country_id": 3,
        "country_code": "UK",
        "country_name": "United Kingdom"
      },
      {
        "country_id": 4,
        "country_code": "USA",
        "country_name": "United states of america"
      },
      {
        "country_id": 5,
        "country_code": "JP",
        "country_name": "Japan"
      },
    ],
    mgs:'successfully loaded the countries'
  });
});
router.get("/api/states/:id", (request, response) => {
  response.set("Access-Control-Allow-Origin", "http://localhost:4200/");
  console.log('request.params in states')
  console.log(request.params)
  response.status(200).json({
    states: [
      {
        "state_id": 1,
        "state_code": "MP",
        "state_name": "Madhya Pradesh",
        "country": 1
      },
      {
        "state_id": 2,
        "state_code": "UK",
        "state_name": "Utrakhand",
        "country": 1
      },
      {
        "state_id": 3,
        "state_code": "GJ",
        "state_name": "Gujrat",
        "country": 1
      },
      {
        "state_id": 4,
        "state_code": "RJ",
        "state_name": "Rajasthan",
        "country": 1
      },
      {
        "state_id": 5,
        "state_code": "JM",
        "state_name": "Jammu",
        "country": 1
      }
    ],
    mgs:'successfully loaded the cities'
  });
});
router.get("/api/cities/:id", (request, response) => {
  response.set("Access-Control-Allow-Origin", "http://localhost:4200/");
  response.status(200).json({
    cities: [
      {
        "city_id": 1,
        "city_name": "Bhopal",
        "state": 1,
        "country": 1
      },
      {
        "city_id": 2,
        "city_name": "Hoshangabad",
        "state": 1,
        "country": 1
      },
      {
        "city_id": 3,
        "city_name": "Betul",
        "state": 1,
        "country": 1
      },
      {
        "city_id": 4,
        "city_name": "Chindwara",
        "state": 1,
        "country": 1
      },
      {
        "city_id": 5,
        "city_name": "Parasia",
        "state": 1,
        "country": 1
      }
    ],
    mgs:'successfully loaded the cities'
  });
});
router.get("/api/getAddress", (request, response) => {
  response.set("Access-Control-Allow-Origin", "http://localhost:4200/");
  response.status(200).json({
    address: [
      {
        "id": 1,
        "country": "US",
        "state": "California",
        "city": "Boise"
      },
      {
        "id": 2,
        "country": "US",
        "state": "Texas",
        "city": "Atlanta"
      },
      {
        "id": 3,
        "country": "US",
        "state": "Florida",
        "city": "Denver"
      },
      {
        "id": 4,
        "country": "US",
        "state": "Virginia",
        "city": "Dover"
      },
      {
        "id": 5,
        "country": "US",
        "state": "Washington DC",
        "city": "Phoenix"
      },
      {
        "id": 6,
        "country": "US",
        "state": "California",
        "city": "Boise"
      },
      {
        "id": 7,
        "country": "US",
        "state": "Texas",
        "city": "Atlanta"
      },
      {
        "id": 8,
        "country": "US",
        "state": "Florida",
        "city": "Denver"
      },
      {
        "id": 9,
        "country": "US",
        "state": "Virginia",
        "city": "Dover"
      },
      {
        "id": 10,
        "country": "US",
        "state": "Washington DC",
        "city": "Phoenix"
      },
      {
        "id": 11,
        "country": "US",
        "state": "California",
        "city": "Boise"
      },
      {
        "id": 12,
        "country": "US",
        "state": "Texas",
        "city": "Atlanta"
      },
      {
        "id": 13,
        "country": "US",
        "state": "Florida",
        "city": "Denver"
      },
      {
        "id": 14,
        "country": "US",
        "state": "Virginia",
        "city": "Dover"
      },
      {
        "id": 15,
        "country": "US",
        "state": "Washington DC",
        "city": "Phoenix"
      },
      {
        "id": 16,
        "country": "US",
        "state": "California",
        "city": "Boise"
      },
      {
        "id": 17,
        "country": "US",
        "state": "Texas",
        "city": "Atlanta"
      },
      {
        "id": 18,
        "country": "US",
        "state": "Florida",
        "city": "Denver"
      },
      {
        "id": 19,
        "country": "US",
        "state": "Virginia",
        "city": "Dover"
      },
      {
        "id": 20,
        "country": "US",
        "state": "Washington DC",
        "city": "Phoenix"
      }
    ],
    mgs:'successfully loaded the address'
  });
});
router.post("/api/saveState", (request, response) => {
  response.set("Access-Control-Allow-Origin", "http://localhost:4200/");
  response.status(200).json({
    msg:'successfully saved the state'
  });
});
router.post("/api/saveCity", (request, response) => {
  response.set("Access-Control-Allow-Origin", "http://localhost:4200/");
  response.status(200).json({
    msg:'successfully saved the city'
  });
});
router.get("/api/alerts", (request, response) => {
  response.set("Access-Control-Allow-Origin", "http://localhost:4200/");
  response.status(200).json({
    alerts: [
      {
        "id": 1,
        "type": "legal",
        "message": "Your Licence is Expired (MD)",
        "desc": "Your Licence is Expired. Please update (MD)",
        "is_read": false,
        "created_at": "2022-10-20T20:41:39.700072Z",
        "updated_at": "2022-10-20T20:47:04.318320Z",
        "user": 14
      },
      {
        "id": 2,
        "type": "zivian",
        "message": "Your Licence is Expired",
        "desc": "Your Licence is Expired. Please update (MD)",
        "is_read": false,
        "created_at": "2022-10-20T20:41:39.700072Z",
        "updated_at": "2022-10-20T20:47:04.318320Z",
        "user": 14
      },
      {
        "id": 3,
        "type": "zivian",
        "message": "Your Licence is Expired (MD)",
        "desc": "Your Licence is Expired. Please update (MD)",
        "is_read": false,
        "created_at": "2022-10-20T20:41:39.700072Z",
        "updated_at": "2022-10-20T20:47:04.318320Z",
        "user": 14
      },
      {
        "id": 4,
        "type": "legal",
        "message": "Your Licence is Expired Your Licence is Expired Your Licence is Expired Your Licence is Expired Your Licence is Expired",
        "desc": "Your Licence is Expired. Please update (MD)",
        "is_read": false,
        "created_at": "2022-10-20T20:41:39.700072Z",
        "updated_at": "2022-10-20T20:47:04.318320Z",
        "user": 14
      },
      {
        "id": 5,
        "type": "license",
        "message": "Your Licence is Expired (MD)",
        "desc": "Your Licence is Expired. Please update (MD)",
        "is_read": false,
        "created_at": "2022-10-20T20:41:39.700072Z",
        "updated_at": "2022-10-20T20:47:04.318320Z",
        "user": 14
      },
      {
        "id": 6,
        "type": "license",
        "message": "Your Licence is Expired (MD)",
        "desc": "Your Licence is Expired. Please update (MD)",
        "is_read": false,
        "created_at": "2022-10-20T20:41:39.700072Z",
        "updated_at": "2022-10-20T20:47:04.318320Z",
        "user": 14
      },
    ],
    mgs:'successfully loaded the alerts'
  });
});

module.exports = router;
