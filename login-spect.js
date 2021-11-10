describe('Login Exitoso test', function() {
    it('deberia redireccionar al home', function() {
      browser.get('http://localhost:4200/');
      element(by.id('login-button')).click();
  
      expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/home');
    });
  });