import {Component} from "@angular/core";
import {ScreensContext} from "../shared/context/screens-context.service";
import app = require('application');

declare let com: any;

declare let LoginScreenlet: any;

@Component({
    selector: "loginscreenlet",
    providers: [ScreensContext],
    template: ``
})
export class LoginScreenletNs {

    public login: any;
    public view: any;

    constructor(private screensContext: ScreensContext) {
        this.createScreenlet("default");
    }

    createScreenlet(theme) {
        if (app.android) {
            this.login = new com.liferay.mobile.screens.auth.login.LoginScreenlet(app.android.context);
            let credentials = com.liferay.mobile.screens.context.storage.CredentialsStorageBuilder.StorageType.NONE;
            this.login.setCredentialsStorage(credentials);

            this.setLayout("login_" + theme);
            this.setAuthMethod(com.liferay.mobile.screens.auth.BasicAuthMethod.EMAIL);
            this.setAuthType(com.liferay.mobile.screens.context.AuthenticationType.BASIC);
        } else {
            this.login = new LoginScreenlet(CGRectMake(20, 40, 335, 617), theme);
            app.ios.rootController.view.addSubview(this.login);
        }
    }

    attach() {
        let containerId = app.android.context.getResources().getIdentifier("content", "id", "android");
        let activity = app.android.foregroundActivity;
        let container = activity.findViewById(containerId);
        let matchParent = android.widget.LinearLayout.LayoutParams.MATCH_PARENT;
        container.addView(this.view, matchParent, matchParent);
    }

    getScreenlet() {
        return this.login;
    }

    setLayout(loginLayout) {
        let layout = app.android.context.getResources().getIdentifier(loginLayout, "layout", app.android.context.getPackageName());
        let layoutInflater = android.view.LayoutInflater;
        this.view = layoutInflater.from(app.android.context).inflate(layout, null);
    }

    setAuthType(authType) {
        this.view.setAuthenticationType(authType);
    }

    setAuthMethod(authMethod) {
        this.view.setBasicAuthMethod(authMethod);
    }

    setListener(listener) {
        if (this.login != null) {
            console.log(listener);
            this.getScreenlet().setListener(listener);
        }
    }
}