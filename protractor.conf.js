exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['login-spect.js'],
  capabilities: {
    'browserName': 'chrome'
  }
};