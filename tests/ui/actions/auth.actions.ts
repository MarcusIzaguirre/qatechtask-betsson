import { Page, expect } from '@playwright/test';
import { LoginElements } from '../elements/login.elements';
import { InventoryElements } from '../elements/inventory.elements';
import { CheckoutActions } from './checkout.actions';

export class AuthActions {
  private loginElem: LoginElements;
  inventElem: InventoryElements
  checkoutAc: CheckoutActions

  constructor(private page: Page) {
    this.loginElem = new LoginElements(page);
    this.inventElem = new InventoryElements(page)
    this.checkoutAc = new CheckoutActions(page)
  }

  async navigateSauce(){
    await this.page.goto('/');
    await expect(this.loginElem.validLogPage).toBeVisible()
    //await expect(this.inventElem.title).toBeVisible();
  }

  async loginValid(username: string, password: string) {
    await this.loginElem.username.fill(username);
    await this.loginElem.password.fill(password);
    await this.loginElem.loginBtn.click();
    await expect(this.page.getByText('Products')).toBeVisible();


  }

 async loginInvalid(username: string, password: string) {
    await this.loginElem.username.fill(username);
    await this.loginElem.password.fill(password);
    await this.loginElem.loginBtn.click();
    await this.checkoutAc.expectErrorContains('Epic sadface: Username and password do not match any user in this service')
    
}

   async loginLocked(username: string, password: string) {
    await this.loginElem.username.fill(username);
    await this.loginElem.password.fill(password);
    await this.loginElem.loginBtn.click();
    await this.checkoutAc.expectErrorContains('Epic sadface: Sorry, this user has been locked out.')
    }



}