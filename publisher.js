const PubNub = require("pubnub");

const pubnub = new PubNub({
  publishKey: "pub-c-2a81792f-aff1-4455-88da-a98ccf6014bd",
  subscribeKey: "sub-c-fa73c607-7914-4480-9aef-be4a374a6b1b",
  userId: "user123",
  // authKey: 'publish'
  secretKey: "sec-c-NDVlMTg1NDQtNzdjMS00Zjk4LWJlZmMtNjE3ZDNmN2JiMzRl",
});

pubnub.publish(
  {
    channel: "unique-channel",
    message: {
      mytime: "My time is: " + new Date().toString(),
    },
  },
  function (status, response) {
    console.log("publishing", status, response);
  }
);
