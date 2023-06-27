const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

const fs = require("fs");
const fsPromise = require("fs").promises;
const path = require("path");

const logEvent = async (message) => {
  const currentDate = format(new Date(), "yyyy-MM-dd \t HH : MM : SS");
  const logItem = `${currentDate}\t ${uuid()}\t ${message} \n`;
  console.log(logItem);

  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromise.mkdir(path.join(__dirname, "logs"));
      console.log("create logs folder");
    }
    await fsPromise.appendFile(
      path.join(__dirname, "logs", "logHistory.txt"),
      logItem
    );
    console.log("create log history");
  } catch (error) {
    console.error(error);
  }
};
module.exports = logEvent;
