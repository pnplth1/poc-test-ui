export default class Login {
  get loginBtn() {
    return $('//android.widget.Button[@content-desc="เข้าสู่ระบบ"]');
  }

  get msEditText() {
    return $("//android.widget.EditText");
  }

  get msNextBtn() {
    return $('//android.widget.Button[@text="Next"]');
  }

  get webkitPasswordText() {
    return $(
      '//android.webkit.WebView[@text="Sign In"]/android.view.View/android.view.View[2]/android.view.View[1]/android.view.View[2]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText'
    );
  }

  get webkitSignInBtn() {
    return $("android.widget.Button");
  }

  get chromeOptionBtn() {
    return $("Customize and control Google Chrome");
  }

  get openInEdgeBrowserBtn() {
    return $(
      '//android.widget.TextView[@resource-id="com.microsoft.emmx:id/menu_item_text" and @text="Open in Edge browser"]'
    );
  }

  async unauthorizedTextPopUp(): Promise<string> {
    return await $(
      "ไม่สามารถดำเนินการได้ ทีทีบี ขออภัยในความไม่สะดวก โปรดลองใหม่อีกครั้งภายหลัง"
    ).getText();
  }

  async clickLoginBtn() {
    await this.loginBtn.waitForDisplayed({ timeout: 10000 });
    await this.loginBtn.click();
  }

  async fillEmailUser(emailUser: string) {
    await this.msEditText.click();
    await this.msEditText.setValue(emailUser);
  }

  async clickMsNextBtn() {
    await this.msNextBtn.click();
  }

  async clickWebkitPasswordText() {
    await this.webkitPasswordText.click();
  }

  async fillPassword(password: string) {
    await this.webkitPasswordText.waitForDisplayed({ timeout: 10000 });
    await this.webkitPasswordText.setValue(password);
  }

  async clickWebkitSignInBtn() {
    await this.webkitSignInBtn.click();
  }

  async clickChromeOptionBtn() {
    await this.chromeOptionBtn.click();
  }

  async clickOpenInEdgeBrowserBtn() {
    await this.openInEdgeBrowserBtn.click();
  }
}
