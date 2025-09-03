
// import { Page } from '@playwright/test';
// export const inventoryEls = (page: Page) => ({
//   title: page.getByText('Products'),
//   addToCartButtons: page.locator('button:has-text("Add to cart")'),
//   cartBadge: page.locator('.shopping_cart_badge'),
//   cartLink: page.locator('.shopping_cart_link'),
// });


import { Page, Locator } from '@playwright/test';

export class InventoryElements {
  readonly title: Locator;
  readonly addToCartButtons: Locator;
  readonly cartBadge: Locator;
  readonly cartLink: Locator;

  constructor(public page: Page) {
    this.title = page.getByText('Products');
    this.addToCartButtons = page.locator('button:has-text("Add to cart")');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('.shopping_cart_link');
  }
}

