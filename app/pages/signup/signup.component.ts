import {Component, OnInit} from "@angular/core";
import {ScreensContext} from "../../shared/context/screens-context.service";
import {Router} from "@angular/router";
import app = require("application");

declare var com: any;

@Component({
    selector: "signup",
    providers: [ScreensContext],
    templateUrl: "pages/signup/signup.html",
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

        let context = app.android.context;
        let login = new com.liferay.mobile.screens.auth.login.LoginScreenlet(app.android.context);
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

        let self = this;

        login.setListener(new com.liferay.mobile.screens.auth.login.LoginListener({
            onLoginSuccess(user: any): void {
                console.log(user)
                self.router.navigate(['/gallery']);
            },
            onLoginFailure(error: any): void {
                console.log(error);
            }
        }));

        this.attach(login);
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

            onSignUpFailure(param0: java.lang.Exception): void {
                console.log("failed sign up");
            },
            onSignUpSuccess(param0: any): void {
                console.log("success sign up");
                self.router.navigate(['/gallery']);
            }

        }));

        console.log(signUp);

        this.attach(signUp);
    }
}