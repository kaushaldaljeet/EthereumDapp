module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!

  build:{
    "index.html": "index.html",
    "app.js":[
      "javascripts/app.js"
    ],
    "app.cs":[
      "stylesheets/app.cs"
    ],
    "images/":"images/"
  },
  rpc: {
    host:"127.0.0.1",
    port: 8545
  },
  networks: {
  "development": {
    host: "127.0.0.1",
    port: 8545,
    network_id: "*" // Match any network id
  }
  }
};
