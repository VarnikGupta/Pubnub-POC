const PubNub = require("pubnub");

const pubnub = new PubNub({
  publishKey: "pub-c-2a81792f-aff1-4455-88da-a98ccf6014bd",
  subscribeKey: "sub-c-fa73c607-7914-4480-9aef-be4a374a6b1b",
  userId: "user123",
  secretKey: "sec-c-NDVlMTg1NDQtNzdjMS00Zjk4LWJlZmMtNjE3ZDNmN2JiMzRl",
});

pubnub.grant(
  {
    authKeys: ["subscribe"],
    channels: ["unique-channel"],
    read: true,
    write: false,
    ttl: 10,
  },
  (status, response) => {
    console.log("permissions", status, response);
  }
);
