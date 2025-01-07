const PubNub = require("pubnub");

pubnub = new PubNub({
  publishKey: "pub-c-2a81792f-aff1-4455-88da-a98ccf6014bd",
  subscribeKey: "sub-c-fa73c607-7914-4480-9aef-be4a374a6b1b",
  userId: "user123",
  secretKey: "sec-c-NDVlMTg1NDQtNzdjMS00Zjk4LWJlZmMtNjE3ZDNmN2JiMzRl",
});

async function generateToken() {
  try {
    const token = await pubnub.grantToken({
      ttl: 1,
      resources: {
        channels: {
          "unique-channel": {
            read: true,
          },
        },
      },
    });

    console.log("Token is ", token);
    return token;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {generateToken};