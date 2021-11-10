const mainRoute = 'https://awesome-apress-pwa-11a03.web.app';
const loginMailBy = by.id('login-email-main');
const loginPassBy = by.id('login-pass-main');
const loginButtonBy = by.id('login-button');
const toastMsg = by.css('#toast-container div.toast-success>div');

describe('Pruebas del login ', function() {

  it('no ingreso credenciales, deberia mostrar un mensaje de error', ()=>{
    browser.get(mainRoute);
    element(loginButtonBy).click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(element(toastMsg)));
    expect(element(toastMsg).getText()).toEqual('Revise e ingrese nuevamente sus credenciales!');
  })

  it('solo ingreso el mail, deberia mostrar un mensaje de error', ()=>{
    browser.get(mainRoute);
    element(loginMailBy).sendKeys('andresap2150@gmail.com');
    element(loginButtonBy).click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(element(toastMsg)));
    expect(element(toastMsg).getText()).toEqual('Revise e ingrese nuevamente sus credenciales!');
  })

  it('solo ingreso el pass, deberia mostrar un mensaje de error', ()=>{
    browser.get(mainRoute);
    element(loginPassBy).sendKeys('Testing1');
    element(loginButtonBy).click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(element(toastMsg)));
    expect(element(toastMsg).getText()).toEqual('Revise e ingrese nuevamente sus credenciales!');
  })

  it('ingreso las credenciales incorrectas', ()=> {
    browser.get(mainRoute);
    element(loginMailBy).sendKeys('andres@gmail.com');
    element(loginPassBy).sendKeys('Testing1·');
    element(loginButtonBy).click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(element(toastMsg)));
    expect(element(toastMsg).getText()).toEqual('Revisa las credenciales!');
  });

  it('deberia redireccionar al home', ()=> {
    browser.get(mainRoute);
    element(loginMailBy).sendKeys('andresap2150@gmail.com');
    element(loginPassBy).sendKeys('Testing1');
    element(loginButtonBy).click();
    browser.wait(protractor.ExpectedConditions.urlIs(mainRoute+'/home'), 5000);
    expect(browser.getCurrentUrl()).toEqual(mainRoute+'/home');
  });
});