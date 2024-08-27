

export class RegistrationPage 
{

constructor(page)
{
    this.page = page;
    // this.signInbutton = page.getByRole('button', { name: 'Log In'});
    // this.userName = page.getByRole('textbox', { name: 'Username' });
    // this.password = page.getByRole('textbox', { name: 'Password' });
    // this.checkMe = page.locator('#chkrememberMe');
    this.firstName = page.locator('#firstName');
    this.middleInitial = page.locator('#middleInitial');
    this.lastName = page.locator('#lastName');
    this.emailAddress = page.locator('#emailAddress');
    this.confirmEmail = page.locator('#confirmEmailAddress');
    this.newPassword = page.locator('#newPassword');
    this.confirmPassword = page.locator('#confirmPassword');
    this.checkBox = page.locator('[role="checkbox"]');
    this.registerButton = page.getByRole('button', { name: 'Register now'});

}

async goTo()
{
       await this.page.goto('https://login.pultemortgage.com');
       await this.page.mouse.down();
       await this.page.locator('a.listitem').filter({ hasText: 'Register'}).click();
       await this.page.getByLabel('Yes').click();
}

async validRegistration(firstname, username, middleinitial, lastname, password) {

     await this.firstName.fill(firstname);
     await this.middleInitial.fill(middleinitial);
     await this.lastName.fill(lastname);
     await this.emailAddress.fill(username);
     await this.confirmEmail.fill(username);
     await this.newPassword.fill(password);
     await this.confirmPassword.fill(password);
     await this.checkBox.click();
     //await this.signInbutton.click();

}  

}

export default RegistrationPage;