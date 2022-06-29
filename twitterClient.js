//CONEXIÓN API DE TWITTER

const { TwitterApi } = require("twitter-api-v2");
const apiKeys = require("./config.js");

const client = new TwitterApi({
    appKey      : apiKeys.appKey,
    appSecret   : apiKeys.appSecret,
    accessToken : apiKeys.accessToken,
    accessSecret: apiKeys.accessSecret
})

const rwClient = client.readWrite;

module.exports = rwClient;