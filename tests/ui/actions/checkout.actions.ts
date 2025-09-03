// src/ui/actions/checkout.actions.ts
import { Page, expect } from '@playwright/test';
//import { checkoutEls } from '../elements/checkout.elements'
import { CheckoutElements } from '../elements/checkout.elements';
import { CartElements } from '../elements/cart.elements';
import { faker } from '@faker-js/faker'

export class CheckoutActions {
  page: Page
  checkoutElem: CheckoutElements
  cartElem: CartElements

  constructor(page: Page) {
    this.page = page
    this.checkoutElem = new CheckoutElements(page)
    this.cartElem = new CartElements(page)

  }
  async clickToCheckout() {
    await this.cartElem.checkoutBtn.click()
  }
  async fillInfoCheckout() {
    //const checkElem = checkoutEls(this.page);
    const randomFname = faker.person.firstName()
    const randomLname = faker.person.lastName()
    const randomZip = faker.location.zipCode()
    await this.checkoutElem.firstName.fill(randomFname);
    await this.checkoutElem.lastName.fill(randomLname);
    await this.checkoutElem.postalCode.fill(randomZip);
  }
  async continue() {
    await this.checkoutElem.continueBtn.click();
  }
  async finish() {
    await this.checkoutElem.finishBtn.click();
  }
  async expectThankYou() {
    await expect(this.checkoutElem.thankYou).toBeVisible();
  }
  async expectErrorContains(text: string) {
    await expect(this.checkoutElem.error).toContainText(text);
  }
}
