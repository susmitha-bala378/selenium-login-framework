const { By } = require("selenium-webdriver");

class LoginPage {
    constructor(driver) {
        this.driver = driver;
    }

    async enterUsername(username) {
        await this.driver.findElement(By.id("user-name")).sendKeys(username);
    }

    async enterPassword(password) {
        await this.driver.findElement(By.id("password")).sendKeys(password);
    }

    async clickLogin() {
        await this.driver.findElement(By.id("login-button")).click();
    }
}

module.exports = LoginPage;
