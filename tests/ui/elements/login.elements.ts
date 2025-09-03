// src/ui/elements/login.elements.ts
import { Page, Locator } from '@playwright/test';

export class LoginElements{
  readonly username: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;
  readonly error: Locator;
  readonly validLogPage: Locator
  //readonly errorLogin: Locator

  constructor(public page: Page) {
    this.username = page.getByPlaceholder('Username');
    this.password = page.getByPlaceholder('Password');
    this.loginBtn = page.getByRole('button', { name: 'Login' });
    this.error = page.locator('[data-test="error"]');
    //this.errorLogin = page.locator('[data-test=error-"button"]')
    this.validLogPage = page.locator('[data-test="login-container"]')
}

}

// export const loginEls = (page: Page) => ({
//   username: page.getByPlaceholder('Username'),
//   password: page.getByPlaceholder('Password'),
//   loginBtn: page.getByRole('button', { name: 'Login' }),
//   error: page.locator('[data-test="error"]'),
// });
