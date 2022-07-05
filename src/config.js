const local = {
  apiGateway: {
    REGION: 'us-west-2',
    URL: 'https://uyg8w8w7le.execute-api.us-west-2.amazonaws.com/dev'
  },
  cognito: {
    REGION: 'us-west-2',
    USER_POOL_ID: 'us-west-2_tlp3NnoHe',
    APP_CLIENT_ID: '24jcp63fiqn5ofipbhl1oeehjq',
    IDENTITY_POOL_ID: 'us-west-2:194691cf-9aa0-473c-b3ea-72fd5e904081'
  }
};

const dev = {
  apiGateway: {
    REGION: 'us-west-2',
    URL: 'https://uyg8w8w7le.execute-api.us-west-2.amazonaws.com/dev'
  },
  cognito: {
    REGION: 'us-west-2',
    USER_POOL_ID: 'us-west-2_tlp3NnoHe',
    APP_CLIENT_ID: '24jcp63fiqn5ofipbhl1oeehjq',
    IDENTITY_POOL_ID: 'us-west-2:194691cf-9aa0-473c-b3ea-72fd5e904081'
  }
};

const test = {
  apiGateway: {
    REGION: 'us-west-2',
    URL: 'https://uyg8w8w7le.execute-api.us-west-2.amazonaws.com/dev'
  },
  cognito: {
    REGION: 'us-west-2',
    USER_POOL_ID: 'us-west-2_tlp3NnoHe',
    APP_CLIENT_ID: '24jcp63fiqn5ofipbhl1oeehjq',
    IDENTITY_POOL_ID: 'us-west-2:194691cf-9aa0-473c-b3ea-72fd5e904081'
  }
};

const prod = {
  apiGateway: {
    REGION: 'us-west-2',
    URL: 'https://uyg8w8w7le.execute-api.us-west-2.amazonaws.com/dev'
  },
  cognito: {
    REGION: 'us-west-2',
    USER_POOL_ID: 'us-west-2_tlp3NnoHe',
    APP_CLIENT_ID: '24jcp63fiqn5ofipbhl1oeehjq',
    IDENTITY_POOL_ID: 'us-west-2:194691cf-9aa0-473c-b3ea-72fd5e904081'
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
