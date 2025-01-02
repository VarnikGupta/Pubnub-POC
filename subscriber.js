const PubNub = require("pubnub");

const pubnub = new PubNub({
//   publishKey: "pub-c-2a81792f-aff1-4455-88da-a98ccf6014bd",
  subscribeKey: "sub-c-fa73c607-7914-4480-9aef-be4a374a6b1b",
  userId: "user123",
  authKey: "subscribe",
});

pubnub.subscribe({
  channels: ["unique-channel"],
});

pubnub.addListener({
  message: function (event) {
    console.log("event occured", event);
  },
  status: function (event) {
    console.log("status occured", event);
  },
});
