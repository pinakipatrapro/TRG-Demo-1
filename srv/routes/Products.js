var express = require('express');
var router = express.Router();
const dbClass = require("sap-hdbext-promisfied")

const axios = require('axios').default;

router.post('/create', async function(req, res, next) {  
    // console.log(req.body)
  var sql = `
    INSERT INTO "TRG.PRODUCT" VALUES(
      sysuuid,
      current_user,
      current_timestamp,
      current_user,
      current_timestamp,
      '${req.body.name}',
      '${req.body.description}',
      'X'
    );
  `
  try {
    
    let db = new dbClass(req.db);
    const statement = await db.preparePromisified(sql);
    const results = await db.statementExecPromisified(statement, [])
    let result = JSON.stringify({
      message : `Product "${req.body.name}" created successfully`,
      data: results
    })
    return res.type("application/json").status(200).send(result)
  } catch (e) {
    return res.type("text/plain").status(500).send(`ERROR: ${e.toString()}`)
  }
});


module.exports = router;