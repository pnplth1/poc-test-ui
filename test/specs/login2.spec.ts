import Login from "../pageObjects/login.page";

describe("Proceed to login", () => {
  let login: Login;

  before(() => {
    login = new Login();
  });
  it("Perform login fail2", async () => {
    await driver.pause(10000);
    await login.clickLoginBtn();
    await login.fillEmailUser("61118@UATTMB.tmbbank.com");
    await login.clickMsNextBtn();
    await login.fillPassword("Tmb@12345");
    await login.clickWebkitSignInBtn();
    // expect(await login.unauthorizedTextPopUp()).toEqual(
    //   "ไม่สามารถดำเนินการได้ ทีทีบี ขออภัยในความไม่สะดวก โปรดลองใหม่อีกครั้งภายหลัง"
    // );
    // await driver.waitForStable({ timeout: 5000 });
    // await driver.touchAction({
    //   action: "tap",
    //   x: 1045,
    //   y: 1550,
    // });
  });
});
