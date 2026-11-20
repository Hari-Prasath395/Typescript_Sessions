import { Page } from "./AppPage";

export class LoginPage extends Page {
  title(): void {
    console.log("Login Page title method....");
  }

  url(): void {
    console.log("Login page URL Methods....");
  }

  doLogin(username: string, password: string): void {
    console.log("Login in with userrname and password");
  }
}
