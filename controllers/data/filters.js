const filters = {
    states: [{state_code: "AL", state_name: "Alabama"}, {state_code: "KL", state_name: "Kerala"}, {state_code: "CA", state_name: "california"}, {state_code: "TX", state_name: "Texas"}],
    roles: ["APC", "MD/DO", 'ZIVIAN_ADMIN', 'SUPER_ADMIN'],
    statuses: ["SUBMITTED"],
    provider_statuses: ["Credentialed", "Not Credentialed"],
    collaborators: ["APC User"]
  }

  module.exports = filters