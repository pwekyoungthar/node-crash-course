const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
console.log(format(new Date(), "yyyy-MM-dd \t HH-MM-SS"));
console.log(uuid());
