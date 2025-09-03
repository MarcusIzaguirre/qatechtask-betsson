// src/ui/tests/checkout.spec.ts
import { test, expect } from '@playwright/test';
import { InventoryElements } from '../elements/inventory.elements';
import { CartElements } from '../elements/cart.elements';
import { CheckoutElements } from '../elements/checkout.elements';
import { CartActions } from '../actions/cart.actions';
import { CheckoutActions } from '../actions/checkout.actions';
import { AuthActions } from '../actions/auth.actions';
import users from '../common/data/users.json'

let invElem: InventoryElements
let cartElem: CartElements
let checkoutElem: CheckoutElements
let cartAc: CartActions
let checkoutAc: CheckoutActions
let authAct: AuthActions

test.describe('Checkout', () => {
  test.beforeEach(async ({ page }) => {
    invElem = new InventoryElements(page)
    cartElem = new CartElements(page)
    checkoutElem  = new CheckoutElements(page)
    cartAc = new CartActions(page)
    checkoutAc = new CheckoutActions(page)
    authAct = new AuthActions(page)
    await authAct.navigateSauce()
    await authAct.loginValid(users.standard.username, users.standard.password)


    // Como já temos storageState, ao navegar para a home já estará logado.
   
  });

  test('TC 01 - Validate the entire purchase flow', async () => {
    await cartAc.addFirstItemToCart()
    await cartAc.goToCart()
    await checkoutAc.clickToCheckout()
    await checkoutAc.fillInfoCheckout()
    await checkoutElem.continueBtn.click();
    await checkoutElem.finishBtn.click();
    await expect(checkoutElem.thankYou).toBeVisible();
 
  });

  test('TC 02 - Validate required field in checkout step', async () => {
    await cartAc.addFirstItemToCart()
    await cartAc.goToCart()
    await checkoutAc.clickToCheckout()
    await checkoutElem.lastName.fill('Last test');
    await checkoutElem.postalCode.fill('11000-000');
    await checkoutAc.continue()
    await checkoutAc.expectErrorContains('First Name is required')
    });

  test('TC 03 - Remove item from cart', async () => {
    await cartAc.addFirstItemToCart()  
    const before = await cartAc.getCartBadgeCount();
    await cartAc.goToCart()
    await cartAc.removeProdFromCart()
    await cartAc.assertCartCount(before - 1);})

})
  

