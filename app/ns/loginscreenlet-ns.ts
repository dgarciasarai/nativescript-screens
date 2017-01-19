import {Component} from "@angular/core";
import {ScreensContext} from "../shared/context/screens-context.service";
import {Router} from "@angular/router";
import app = require("application");

declare let com: any;

@Component({
    selector: "loginscreenlet",
    providers: [ScreensContext],
    template: ``
})
export class LoginScreenlet {

    public login: any;
    public loginListener: any;
    public context = app.android.context;

    constructor(private router: Router, private screensContext: ScreensContext) {

        if (app.android) {
            let self = this;
            this.login = new com.liferay.mobile.screens.auth.login.LoginScreenlet(this.context);

            let credentials = com.liferay.mobile.screens.context.storage.CredentialsStorageBuilder.StorageType.NONE;
            this.login.setCredentialsStorage(credentials);

        } else {
            console.log("loginscreenlet ns");
        }
    }
    
    initialize(loginLayout, authMethod) {
        console.log("login on init...: " + loginLayout);

        let layout = this.context.getResources().getIdentifier(loginLayout, "layout", this.context.getPackageName());
        let layoutInflater = android.view.LayoutInflater;
        let view: any = layoutInflater.from(this.context).inflate(layout, null);
        
        view.setBasicAuthMethod(authMethod);

        let basic = com.liferay.mobile.screens.context.AuthenticationType.BASIC;
        view.setAuthenticationType(basic);

        console.log("login rendered");

        this.attach(view);
    }

    attach(view) {
        let containerId = this.context.getResources().getIdentifier("content", "id", "android");
        let activity = app.android.foregroundActivity;
        let container = activity.findViewById(containerId);
        let matchParent = android.widget.LinearLayout.LayoutParams.MATCH_PARENT;
        container.addView(view, matchParent, matchParent);
    }

    getScreenlet() {
        return this.login;
    }

    setListener(listener) {
        if (this.login != null) {
            console.log(listener);
            this.loginListener = this.getScreenlet().setListener(listener);
        }
    }
}