const config = {
  SENTRY_DSN:
    "https://f4543e357aad4936852f9521101bda55@o1419484.ingest.sentry.io/6763417",
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY:
    "pk_test_51Lih43Ci04YvMwz3scOjpooHRbMz3n3LzfKLGrfXcbglC2TC65yH1QQn1ltEoqQcGyBeCFDApQ3eWIbGZtSEYKwQ00So33alPx",
  // Backend config
  s3: {
    REGION: process.env.REACT_APP_REGION,
    BUCKET: process.env.REACT_APP_BUCKET,
  },
  apiGateway: {
    REGION: process.env.REACT_APP_REGION,
    URL: process.env.REACT_APP_API_URL,
  },
  cognito: {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY:
      "pk_test_51Lih43Ci04YvMwz3scOjpooHRbMz3n3LzfKLGrfXcbglC2TC65yH1QQn1ltEoqQcGyBeCFDApQ3eWIbGZtSEYKwQ00So33alPx",
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
  },
};

export default config;
