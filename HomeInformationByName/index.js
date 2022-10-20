const data = require("./houses.json");

module.exports = async function (context, req) {
  
    context.res = {
        body: data
    };
}