// import { expect } from '@wdio/globals'
// import LoginPage from '../pageobjects/login.page.js'
// import SecurePage from '../pageobjects/secure.page.js'

import FastApiPage from "../pageobjects/apidemo.ts";

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await FastApiPage.clickAccessAbility();
  });
});
