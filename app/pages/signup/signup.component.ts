import {LoginScreenlet} from '../../ns/loginscreenlet-ns';
import {Component, OnInit} from "@angular/core";
import {ScreensContext} from "../../shared/context/screens-context.service";
import {Router} from "@angular/router";
import app = require('application');

declare let com: any;
/*declare let LoginScreenlet: any;
declare let CGRectMake: any;
declare let NSObject: any;
declare let LoginScreenletDelegate: any;*/

@Component({
    selector: "signup",
    providers: [ScreensContext, LoginScreenlet],
    template: ``,
    styleUrls: ["pages/signup/signup-common.css"]
})
export class SignUpComponent implements OnInit {

    constructor(private router: Router, private screensContext: ScreensContext, private loginScreenlet: LoginScreenlet) {
        this.loginScreenlet.initialize("login_westeros", com.liferay.mobile.screens.auth.BasicAuthMethod.EMAIL);
    }

    ngOnInit() {
        this.renderLogin();
    }

    renderLogin() {
        console.log('trying to render login');

        let self = this;
        let login;

        if (app.android) {
            console.log("android app here!!!!!!");

            self.loginScreenlet.setListener(new com.liferay.mobile.screens.auth.login.LoginListener({
                onLoginSuccess(user: any): void {
                    console.log(user);
                    self.router.navigate(["/gallery"]);
                },
                onLoginFailure(error: any): void {
                    console.log(error);
                }
            }));
        } else {
            console.log("iOS!!!!");

            /*let superview = app.ios.rootController.view;

            login = new LoginScreenlet(CGRectMake(20, 40, 335, 617), "demo");

            console.log("login screenlet ios: " + login);
            console.log("theme name: " + login.themeName);

            superview.addSubview(login);

            let delegate = NSObject.extend({
                screenletOnLoginResponseUserAttributes(screenlet, attributes){
                    console.log(attributes)
                    self.router.navigate(['/gallery']);
                }
            }, {protocols: [LoginScreenletDelegate]});

            login.delegate = new delegate();
            console.log(login.delegate);*/
        }
    }
}