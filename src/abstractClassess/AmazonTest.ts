import { LoginPage } from "./Loginpage";

let lp = new LoginPage("Hari", 30);
lp.doLogin("admin@gmail.com", "admin@123");
lp.loadingTime();
lp.title();
lp.url();

console.log(lp.age + ":" + lp.empName);
