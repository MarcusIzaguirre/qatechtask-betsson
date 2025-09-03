// src/ui/tests/login.spec.ts
import { test, expect } from '@playwright/test';
import { LoginElements } from '../elements/login.elements'
//import { users } from '../tests/ui/common/data/users.json'
import users from '../common/data/users.json'
import { AuthActions } from '../actions/auth.actions';
//const users = require('../tests/ui/common/data/users.json')

let login: LoginElements
let authAct: AuthActions

test.describe('Login', () => {
  test.beforeEach(async ({ page }) => {
    login = new LoginElements(page)
    authAct = new AuthActions(page)
    await authAct.navigateSauce()
  });

  test('TC 01 - Login successfully', async ({ page }) => {
    await authAct.loginValid(users.standard.username, users.standard.password)
  });

  test('TC 02 - Login invalid', async ({ page }) => { 
    await authAct.loginInvalid('test', 'pass')
  })

  test('TC 03 - Check locked user', async ({ page }) => { 
    await authAct.loginLocked(users.locked.username, users.locked.password)
  })
});
