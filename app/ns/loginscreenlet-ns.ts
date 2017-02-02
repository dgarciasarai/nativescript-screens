import {Component} from "@angular/core";
import app = require('application');

declare let com: any;

declare let LoginScreenlet: any;

@Component({
    selector: "loginscreenletwrapper",
    template: ``
})
export class LoginScreenletWrapper {

    private login: any;
    private view: any;

    constructor() {
    }

    createDefaultScreenlet() {
        if (app.ios) {
            let statusBarHeight = UIApplication.sharedApplication.statusBarFrame.size.height;
            let screenWidth = UIScreen.mainScreen.applicationFrame.size.width;
            let screenHeigt = UIScreen.mainScreen.applicationFrame.size.height;
            
            this.createScreenlet(CGRectMake(0, statusBarHeight * 2, screenWidth, screenHeigt), "default", null, null);
        } else {
            this.createScreenlet(null, "default", com.liferay.mobile.screens.auth.BasicAuthMethod.EMAIL, com.liferay.mobile.screens.context.AuthenticationType.BASIC);
        }
    }

    createScreenlet(size, theme, authMethod, authType) {
        if (app.android) {
            this.login = new com.liferay.mobile.screens.auth.login.LoginScreenlet(app.android.context);
            this.login.setCredentialsStorage(com.liferay.mobile.screens.context.storage.CredentialsStorageBuilder.StorageType.NONE);

            this.setLayout(theme);
            this.setAuthMethod(authMethod);
            this.setAuthType(authType);

            this.view.setScreenlet(this.getScreenlet());
            this.getScreenlet().setViewModel(this.view);

            this.attach();
        } else {
            this.login = new LoginScreenlet(size, theme);
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

    private setLayout(loginLayout) {
        let layout = app.android.context.getResources().getIdentifier("login_" + loginLayout, "layout", app.android.context.getPackageName());
        let layoutInflater = android.view.LayoutInflater;

        let defaultTheme = app.android.context.getResources().getIdentifier(loginLayout + "_theme", "style", app.android.context.getPackageName())
        let context = new android.view.ContextThemeWrapper(app.android.context, defaultTheme);
        this.view = layoutInflater.from(context).inflate(layout, null);
    }

    private setAuthType(authType) {
        this.view.setAuthenticationType(authType);
    }

    private setAuthMethod(authMethod) {
        this.view.setBasicAuthMethod(authMethod);
    }

}