import {Component, OnInit} from "@angular/core";
import {ScreensContext} from "../../shared/context/screens-context.service";
import {Router} from "@angular/router";
import app = require("application");

declare let com: any;
declare let LoginScreenlet: any;
declare let CGRectMake: any;
declare let NSObject: any;
declare let BaseScreenlet: any;

declare let LoginScreenletDelegate: any;
declare let BaseScreenletDelegate: any;

let colorModule = require("color");

@Component({
    selector: "signup",
    providers: [ScreensContext],
    template: ``,
    styleUrls: ["pages/signup/signup-common.css"]
})
export class SignUpComponent implements OnInit {

    constructor(private router: Router, private screensContext: ScreensContext) {
    }

    ngOnInit() {

        // this.renderSignUp()
        this.renderLogin();
    }

    renderLogin() {
        console.log('trying to render login');

        let self = this;
        let login;

        if (app.android) {
            let context = app.android.context;
            login = new com.liferay.mobile.screens.auth.login.LoginScreenlet(app.android.context);
            let credentials = com.liferay.mobile.screens.context.storage.CredentialsStorageBuilder.StorageType.NONE;
            login.setCredentialsStorage(credentials);

            let layout = context.getResources().getIdentifier("login_default", "layout", context.getPackageName());

            let layoutInflater = android.view.LayoutInflater;
            let view: any = layoutInflater.from(context).inflate(layout, null);
            let email = com.liferay.mobile.screens.auth.BasicAuthMethod.EMAIL;
            view.setBasicAuthMethod(email);

            let basic = com.liferay.mobile.screens.context.AuthenticationType.BASIC;
            view.setAuthenticationType(basic);
            login.assignView(view);

            console.log("login rendered");

            login.setListener(new com.liferay.mobile.screens.auth.login.LoginListener({
                onLoginSuccess(user: any): void {
                    console.log(user);
                    self.router.navigate(['/gallery']);
                },
                onLoginFailure(error: any): void {
                    console.log(error);
                }
            }));

            this.attach(login);

        } else {
            console.log("iOS!!!!");

            login = new LoginScreenlet(CGRectMake(0, 20, 300, 500));

            console.log("login screenlet ios: " + login);
            console.log("theme name: " + login.themeName);

            // optional func screenlet(screenlet: BaseScreenlet,
            //     onLoginResponseUserAttributes attributes: [String:AnyObject])
            // optional func screenlet(screenlet: BaseScreenlet,
            //     onLoginError error: NSError)
            // optional func screenlet(screenlet: BaseScreenlet,
            //     onCredentialsSavedUserAttributes attributes: [String:AnyObject])
            // optional func screenlet(screenlet: LoginScreenlet,
            //     onCredentialsLoadedUserAttributes attributes: [String:AnyObject])

            let obj = NSObject.extend({
                init: function() {
                    var self = this.super.init();
                    if (self) {
                        // The base class initialized successfully
                        console.log("Initialized");
                    }
                    return self;
                },
                screenletOnLoginResponseUserAttributes(screenlet: any, attributes: any){
                    console.log('1' + attributes)
                    throw new Error('sdfjkasdfkjsad')
                },
                screenlet(screenlet, onLoginResponseUserAttributes){
                    console.log('2' + onLoginResponseUserAttributes)
                    throw new Error('sdfjkasdfkjsad')
                },
                // screenletOnLoginError(screenlet: any, error: any): void{
                //     console.log('3' + error)
                //     throw new Error('sdfjkasdfkjsad')
                // },
                // screenletOnCredentialsSavedUserAttributes(screenlet: any, attributes: any): void{
                //     console.log('4' + attributes)
                // },
                // screenletOnCredentialsLoadedUserAttributes(screenlet: any, attributes: any): void{
                //     console.log('5' + attributes)
                // },
            }, {
                protocols: [LoginScreenletDelegate],
                // exposedMethods: {
                //     screenlet: {
                //         returns: interop.types.void, params: [BaseScreenlet, interop.types.id]
                //     },
                //     screenletOnLoginResponseUserAttributes: {
                //         returns: interop.types.void, params: [BaseScreenlet, interop.types.id]
                //     },
                //     screenletOnLoginError: {
                //         returns: interop.types.void, params: [BaseScreenlet, interop.types.id]
                //     },
                //     screenletOnCredentialsSavedUserAttributes: {
                //         returns: interop.types.void, params: [BaseScreenlet, interop.types.id]
                //     },
                //     screenletOnCredentialsLoadedUserAttributes: {
                //         returns: interop.types.void, params: [BaseScreenlet, interop.types.id]
                //     },
                // }
            })

            // optional func screenlet(screenlet: BaseScreenlet, onLoginResponseUserAttributes attributes: [String:AnyObject])
            // login.loginDelegate = obj;
            login.delegate = new obj();
            console.log(new obj())
            // login.loginDelegate.screenlet = obj;
            console.log(login.delegate);
            // console.log(login.delegate.screenlet);
            // login.delegate = obj;

            app.ios.rootController.view.addSubview(login);
        }
    }


    attach(view) {
        let context = app.android.context;
        let containerId = context.getResources().getIdentifier("content", "id", "android");
        let activity = app.android.foregroundActivity;
        let container = activity.findViewById(containerId);
        let matchParent = android.widget.LinearLayout.LayoutParams.MATCH_PARENT;
        container.addView(view, matchParent, matchParent);
    }

    private renderSignUp() {
        console.log('trying to render sign up');

        let context = app.android.context;
        let signUp = new com.liferay.mobile.screens.auth.signup.SignUpScreenlet(app.android.context);
        signUp.setCompanyId(this.screensContext.COMPANY_ID);
        signUp.setAnonymousApiUserName(this.screensContext.ANONYMOUS_API_USERNAME);
        signUp.setAnonymousApiPassword(this.screensContext.ANONYMOUS_API_PASSWORD);
        signUp.setAutoLogin(true);

        let credentials = com.liferay.mobile.screens.context.storage.CredentialsStorageBuilder.StorageType.NONE;
        signUp.setCredentialsStorage(credentials);

        let email = com.liferay.mobile.screens.auth.BasicAuthMethod.EMAIL;
        signUp.setBasicAuthMethod(email);

        let layout = context.getResources().getIdentifier("sign_up_default", "layout", context.getPackageName());
        signUp.render(layout);

        let self = this;

        signUp.setListener(new com.liferay.mobile.screens.auth.signup.SignUpListener({

            onSignUpFailure(e: java.lang.Exception): void {
                console.log("failed sign up" + e);
            },
            onSignUpSuccess(user: any): void {
                console.log("success sign up" + user);
                self.router.navigate(['/gallery']);
            }

        }));

        console.log(signUp);

        this.attach(signUp);
    }
}