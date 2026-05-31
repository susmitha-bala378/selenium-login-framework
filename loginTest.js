const { Builder } = require("selenium-webdriver");
const LoginPage = require("./LoginPage");

async function loginTest() {
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        await driver.get("https://www.saucedemo.com");

        const loginPage = new LoginPage(driver);

        await loginPage.enterUsername("standard_user");
        await loginPage.enterPassword("secret_sauce");
        await loginPage.clickLogin();

        console.log("Login successful");
    } catch (error) {
        console.error(error);
    } finally {
        await driver.quit();
    }
}

loginTest();
