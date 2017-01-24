import {Component} from "@angular/core";
import {ScreensContext} from "../shared/context/screens-context.service";
import app = require('application');

declare let com: any;

declare let LoginScreenlet: any;

@Component({
    selector: "loginscreenlet",
    template: ``
})
export class LoginScreenletWrapper {

    private login: any;
    private view: any;

    constructor() {
    }

    createDefaultScreenlet() {
        this.createScreenlet(null, null, null);
    }

    createScreenlet(theme, authMethod, authType) {
        if (app.android) {
            this.login = new com.liferay.mobile.screens.auth.login.LoginScreenlet(app.android.context);
            let credentials = com.liferay.mobile.screens.context.storage.CredentialsStorageBuilder.StorageType.NONE;
            this.login.setCredentialsStorage(credentials);

            this.setLayout(theme, "default");
            this.setAuthMethod(authMethod, com.liferay.mobile.screens.auth.BasicAuthMethod.EMAIL);
            this.setAuthType(authType, com.liferay.mobile.screens.context.AuthenticationType.BASIC);
            this.attach();
        } else {
            let statusBarHeight = UIApplication.sharedApplication.statusBarFrame.size.height;
            let screenWidth = UIScreen.mainScreen.applicationFrame.size.width;
            let screenHeigt = UIScreen.mainScreen.applicationFrame.size.height;

            this.login = new LoginScreenlet(CGRectMake(20, statusBarHeight * 2, screenWidth - 40, screenHeigt - statusBarHeight), theme);
            app.ios.rootController.view.addSubview(this.login);
        }
    }

    setDelegate(delegate) {
        this.getScreenlet().delegate = delegate;
    }

     setListener(listener) {
      this.getScreenlet().setListener(listener);
    }

    private attach() {
        let containerId = app.android.context.getResources().getIdentifier("content", "id", "android");
        let activity = app.android.foregroundActivity;
        let container = activity.findViewById(containerId);
        let matchParent = android.widget.LinearLayout.LayoutParams.MATCH_PARENT;
        container.addView(this.view, matchParent, matchParent);
    }

    private getScreenlet() {
        return this.login;
    }

    private setLayout(loginLayout, defaultLayout) {
        if(loginLayout == null || loginLayout == "") {
            loginLayout = defaultLayout;
        }
        let layout = app.android.context.getResources().getIdentifier("login_" + loginLayout, "layout", app.android.context.getPackageName());
        let layoutInflater = android.view.LayoutInflater;
        this.view = layoutInflater.from(app.android.context).inflate(layout, null);
    }

    private setAuthType(authType, defaultAuthType) {
        if(authType == null) {
            authType = defaultAuthType;
        }
        this.view.setAuthenticationType(authType);
    }

    private setAuthMethod(authMethod, defaultAuthMethod) {
        if(authMethod == null) {
            authMethod = defaultAuthMethod;
        }
        this.view.setBasicAuthMethod(authMethod);
    }

}