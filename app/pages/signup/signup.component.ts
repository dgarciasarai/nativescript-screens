import { Component, OnInit } from "@angular/core";
import { ScreensContext } from "../../shared/context/screens-context.service";
import { Router } from "@angular/router";
import app = require("application");

declare var com: any;

@Component({
    selector: "signup",
    providers: [ScreensContext],
    templateUrl: "pages/signup/signup.html",
    styleUrls: ["pages/signup/signup-common.css"]
})
export class SignUpComponent implements OnInit {

    constructor(private router: Router, private screensContext: ScreensContext) {}

    ngOnInit() {

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

        let containerId = context.getResources().getIdentifier("content" , "id", "android");
        let activity = app.android.foregroundActivity;
        let container = activity.findViewById(containerId);
        let matchParent = android.widget.LinearLayout.LayoutParams.MATCH_PARENT;
        container.addView(signUp, matchParent, matchParent);
    }
}