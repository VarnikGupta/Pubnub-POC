const PubNub = require("pubnub");
const { generateToken } = require("./token.js");

async function initializePubNub() {
  try {
    const token = await generateToken();

    console.log("Generated Token:", token);

    const pubnub = new PubNub({
      subscribeKey: "sub-c-fa73c607-7914-4480-9aef-be4a374a6b1b",
      userId: "user123",
    });

    // pubnub.setToken(token);

    pubnub.subscribe({
      channels: ["unique-channel"],
    });

    pubnub.addListener({
      message: function (m) {
        console.log("Received message:", m.message);
      },
      status: function (status) {
        console.log("Status is ", status);
      },
    });

    console.log("PubNub initialized successfully with token!");
  } catch (error) {
    console.log("Error initializing PubNub:", error);
  }
}

// Call the function to initialize PubNub
initializePubNub();
