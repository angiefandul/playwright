const { test, expect } = require('@playwright/test'); 

class LoginPage 
{

constructor(page)
{
    this.page = page;
    this.signInbutton = page.getByRole('button', { name: 'Log In'});
    this.userName = page.getByRole('textbox', { name: 'Username' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.checkMe = page.locator('#chkrememberMe');

}

async goTo()
{
    await this.page.goto('https://login.pultemortgage.com/login');
}

async validLogin(username, password) {

     await this.userName.fill(username);
     await this.password.fill(password);
     await this.checkMe.check();
     await this.signInbutton.click();

}  

}

module.exports = {LoginPage};