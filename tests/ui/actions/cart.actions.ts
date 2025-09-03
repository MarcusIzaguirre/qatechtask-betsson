// src/ui/actions/cart.actions.ts
import { Page, expect } from '@playwright/test';
import { InventoryElements } from '../elements/inventory.elements';
import { CartElements } from '../elements/cart.elements';

export class CartActions {
  page: Page
  inventElem: InventoryElements
  cartElem: CartElements
  
  constructor(page: Page) {
    this.page = page
    this.inventElem = new InventoryElements(page)
    this.cartElem = new CartElements(page)
  }

  async addFirstItemToCart() {
    await expect(this.inventElem.title).toBeVisible()
    await this.inventElem.addToCartButtons.first().click();
    await expect(this.inventElem.cartBadge).toHaveText(/1/)

    // const inv = inventoryEls(this.page);
    // await expect(inv.title).toBeVisible();
   // await inv.addToCartButtons.first().click();
    //await expect(inv.cartBadge).toHaveText(/1/);
  }
  async goToCart() {
    await this.inventElem.cartLink.click();
  }

  // async checkCart(){
  //   //await expect(this.inventElem.cartBadge).toHaveCount(0);
  //   const before = parseInt(await this.inventElem.cartBadge.textContent() || '0',10)
  //   //remove
  //   const after = parseInt(await this.inventElem.cartBadge.textContent() || '0', 10)
  //   expect(after).toBe(before - 1)
  // }



  async removeProdFromCart(){
    await this.cartElem.removeButtons.first().click()
  }

  async getCartBadgeCount(): Promise<number> {
    const count = await this.inventElem.cartBadge.count();
    if (count === 0) return 0; // badge sumiu => 0
    const txt = await this.inventElem.cartBadge.first().innerText();
    return parseInt(txt, 10) || 0;
}

  async assertCartCount(expected: number) {
  if (expected === 0) {
    await expect(this.inventElem.cartBadge).toHaveCount(0);
  } else {
    await expect(this.inventElem.cartBadge).toHaveText(String(expected));
  }
}

}

