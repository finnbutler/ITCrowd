import "dotenv/config";
export default {
  expo: {
    name: "itcrowdproject",
    slug: "snack-ba7beb8e-b385-417f-afbf-0af621cfcc01",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },

    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
      config: {
        firebase: {
          appId: "1:372766421375:web:e092a8c4883270628a6a4a",
          apiKey: "AIzaSyAXqjPWQ5FBL5Ere2yBCafdvXPwQS6llSM",
          projectId: "deco3801-91e98",
          measurementId: "G-YEQ5SF31WE",
        },
      },
    },
  },
};
