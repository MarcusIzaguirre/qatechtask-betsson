// // src/ui/tests/auth.setup.ts
// import { test, expect } from '@playwright/test';
// import { LoginElements } from '../ui/elements/login.elements'
// //import { users } from '../../tests/ui/common/data/users.json'
// import { mkdirSync, writeFileSync } from 'fs';
// import users from './common/data/users.json'
// //const users = require('../ui/common/data/users.json')

// test('Setup auth', async ({ page, context }) => {
//   await page.goto('https://www.saucedemo.com/');
//   const login = new LoginElements(page);
//   await login.username.fill(users.standard.username);
//   await login.password.fill(users.standard.password);
//   await login.loginBtn.click();
//   await expect(page.getByText('Products')).toBeVisible();

//   mkdirSync('storage', { recursive: true });
//   writeFileSync('storage/auth.json', JSON.stringify(await context.storageState()));
// });
