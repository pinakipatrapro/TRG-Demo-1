const passport = require('passport');
const { JWTStrategy } = require('@sap/xssec');
const xsenv = require('@sap/xsenv');
var hdbext = require('@sap/hdbext');
var express = require('express');
var xsjs = require("@sap/xsjs");
const axios = require('axios').default;

xsenv.loadEnv();
var port = process.env.PORT || 4004;
var app = express();

var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


// XSUAA Middleware

passport.use(new JWTStrategy(xsenv.getServices({uaa:{tag:'xsuaa'}}).uaa));

app.use(passport.initialize());
let authenticateRoute = passport.authenticate('JWT', { session: false });


var hanaConfig = xsenv.cfServiceCredentials({ tag: 'hana' });
app.use(hdbext.middleware(hanaConfig));



const ProductsRoute=require('./routes/Products');
app.use('/routes/Products',authenticateRoute, ProductsRoute);




//XSJS routing
var options = {
	auditLog : { logToConsole: true }, 
	redirectUrl: "/index.xsjs",
	xsApplicationUser: false
};

try {
  options = Object.assign(options, xsenv.getServices({ hana: { tag: "hana" } }));
} catch (err) {
  console.log("[WARN]", err.message);
}

try {
  options = Object.assign(options, xsenv.getServices({ uaa: { tag: "xsuaa" } }));
} catch (err) {
  console.log("[WARN]", err.message);
}
var xsjsApp = xsjs(options);
app.use(xsjsApp);


app.listen(port);