const local = {
  apiGateway: {
    REGION: 'us-west-2',
    URL: 'https://uyg8w8w7le.execute-api.us-west-2.amazonaws.com/dev'
  },
  cognito: {
    REGION: 'us-west-2',
    USER_POOL_ID: 'us-west-2_Psp3z5DNp',
    APP_CLIENT_ID: '72hv2d893565j4ccm9hf0bl9hj',
    IDENTITY_POOL_ID: 'us-west-2:c2aa6579-1f5e-4aa9-b5b6-214783aa6551'
  }
};

const dev = {
  apiGateway: {
    REGION: 'us-west-2',
    URL: 'https://uyg8w8w7le.execute-api.us-west-2.amazonaws.com/dev'
  },
  cognito: {
    REGION: 'us-west-2',
    USER_POOL_ID: 'us-west-2_Psp3z5DNp',
    APP_CLIENT_ID: '72hv2d893565j4ccm9hf0bl9hj',
    IDENTITY_POOL_ID: 'us-west-2:c2aa6579-1f5e-4aa9-b5b6-214783aa6551'
  }
};

const test = {
  apiGateway: {
    REGION: 'us-west-2',
    URL: 'https://uyg8w8w7le.execute-api.us-west-2.amazonaws.com/dev'
  },
  cognito: {
    REGION: 'us-west-2',
    USER_POOL_ID: 'us-west-2_Psp3z5DNp',
    APP_CLIENT_ID: '72hv2d893565j4ccm9hf0bl9hj',
    IDENTITY_POOL_ID: 'us-west-2:c2aa6579-1f5e-4aa9-b5b6-214783aa6551'
  }
};

const prod = {
  apiGateway: {
    REGION: 'us-west-2',
    URL: 'https://uyg8w8w7le.execute-api.us-west-2.amazonaws.com/dev'
  },
  cognito: {
    REGION: 'us-west-2',
    USER_POOL_ID: 'us-west-2_Psp3z5DNp',
    APP_CLIENT_ID: '72hv2d893565j4ccm9hf0bl9hj',
    IDENTITY_POOL_ID: 'us-west-2:c2aa6579-1f5e-4aa9-b5b6-214783aa6551'
  }
};

let config;

switch (process.env.REACT_APP_STAGE) {
  case 'prod':
    config = prod;
    break;
  case 'test':
    config = test;
    break;
  case 'dev':
    config = dev;
    break;
  default:
    config = local;
    break;
}

const configExport =  {
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};

export default configExport;
