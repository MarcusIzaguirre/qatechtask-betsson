// import { Page } from '@playwright/test';
// export const checkoutEls = (page: Page) => ({
//   checkoutBtn: page.getByRole('button', { name: 'Checkout' }),
//   firstName: page.locator('[data-test="firstName"]'),
//   lastName: page.locator('[data-test="lastName"]'),
//   postalCode: page.locator('[data-test="postalCode"]'),
//   continueBtn: page.getByRole('button', { name: 'Continue' }),
//   finishBtn: page.getByRole('button', { name: 'Finish' }),
//   thankYou: page.getByText('Thank you for your order!'),
//   error: page.locator('[data-test="error"]'),
// });


import { Page, Locator } from '@playwright/test';

export class CheckoutElements {
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly postalCode: Locator;
  readonly continueBtn: Locator;
  readonly finishBtn: Locator;
  readonly thankYou: Locator;
  readonly error: Locator;

  constructor(public page: Page) {
    this.firstName = page.locator('[data-test="firstName"]');
    this.lastName = page.locator('[data-test="lastName"]');
    this.postalCode = page.locator('[data-test="postalCode"]');
    this.continueBtn = page.getByRole('button', { name: 'Continue' });
    this.finishBtn = page.getByRole('button', { name: 'Finish' });
    this.thankYou = page.getByText('Thank you for your order!');
    this.error = page.locator('[data-test="error"]');
  }
}

