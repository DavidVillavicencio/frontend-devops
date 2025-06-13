import { Given, Then, When } from "@cucumber/cucumber";
import { ICustomWorld } from "./config/custom-world";
import { expect } from '@playwright/test'

Given('Entro como usuario a la pagina de login', async function (this: ICustomWorld) {
    const page = this.page!;
    await page.goto('http://localhost:5173/')
});

Given('ingreso el nombre de usuario {string}', async function (this: ICustomWorld, username: string) {
    const page = this.page!;
    await page.fill('#user-name', username);
});

Given('ingreso la contraseña de usuario {string}', async function (this: ICustomWorld, password: string) {
    const page = this.page!;
    await page.fill('#password', password);
});

When('hago click en el boton de login', async function (this: ICustomWorld) {
    const page = this.page!;
    await page.locator('#login-button').click();
});

Then('navego a la pantalla de home', async function (this: ICustomWorld) {
    const page = this.page!;
    await expect(page).toHaveURL('http://localhost:5173/home')
})