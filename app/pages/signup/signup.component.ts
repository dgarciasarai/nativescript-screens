import {LoginScreenletWrapper} from '../../ns/loginscreenlet-ns';
import {Component, OnInit} from "@angular/core";
import {ScreensContext} from "../../shared/context/screens-context.service";
import {Router} from "@angular/router";
import app = require('application');

declare let com: any;

declare let NSObject: any;
declare let LoginScreenletDelegate: any;

@Component({
    selector: "signup",
    providers: [ScreensContext, LoginScreenletWrapper],
    template: ``,
    styleUrls: ["pages/signup/signup-common.css"]
})
export class SignUpComponent implements OnInit {

    constructor(private router: Router, private screensContext: ScreensContext, private loginScreenlet: LoginScreenletWrapper) {
        if(app.android) {
            this.loginScreenlet.createDefaultScreenlet();
        } else {
            let statusBarHeight = UIApplication.sharedApplication.statusBarFrame.size.height;
            let screenWidth = UIScreen.mainScreen.applicationFrame.size.width;
            let screenHeigt = UIScreen.mainScreen.applicationFrame.size.height;

            this.loginScreenlet.createScreenlet(CGRectMake(0, statusBarHeight, screenWidth, screenHeigt), "demo", null, null);
        }
    }

    ngOnInit() {
        this.renderLogin();
    }

    renderLogin() {
        console.log('trying to render login: ' + app);

        let self = this;
        
        if (app.android) {            
            this.loginScreenlet.setListener(new com.liferay.mobile.screens.auth.login.LoginListener({
                onLoginSuccess(user: any): void {
                    console.log("Login successful by user: " + user);
                    self.router.navigate(["/gallery"]);
                },
                onLoginFailure(error: java.lang.Exception): void {
                    console.log(error);
                }
            }));
        } else {
            console.log("iOS!!!!" + app.ios);
            let delegate = NSObject.extend({
                screenletOnLoginResponseUserAttributes(screenlet, attributes){
                    console.log("Login successful by user: " + attributes);
                    self.router.navigate(['/gallery']);
                }
            }, {protocols: [LoginScreenletDelegate]});

            this.loginScreenlet.setDelegate(new delegate());
        }
    }
}