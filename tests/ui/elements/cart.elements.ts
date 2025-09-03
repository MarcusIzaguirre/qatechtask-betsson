import { Page, Locator } from '@playwright/test';


export class CartElements {
  readonly checkoutBtn: Locator;
  readonly removeButtons: Locator;
  readonly cartItemNames: Locator
  readonly cartItems: Locator 

  constructor(public page: Page) {
    this.checkoutBtn = page.getByRole('button', { name: 'Checkout' });
    this.removeButtons = page.locator('button:has-text("Remove")');
    this.cartItemNames = page.locator('[data-test="inventory-item-name"], .inventory_item_name');
    this.cartItems = page.locator('.cart_item');
  }
}
