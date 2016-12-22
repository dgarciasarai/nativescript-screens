import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import app = require("application");

declare var com: any;
declare var LiferayServerContext: any;

@Injectable()
export class ScreensContext {

    COMPANY_ID = 20116;
    GROUP_ID = 33475;
    SERVER = 'http://screens-challenge.liferay.org.es';
    SERVER_VERSION_IOS = 70;
    ANONYMOUS_API_USERNAME = 'anonymous1@liferay.com';
    ANONYMOUS_API_PASSWORD = 'anonymous1';

    IMAGE_GALLERY_FOLDER_ID = 33652;

    constructor() {
        if (app.android) {
            console.log("screens context android");

            let LiferayScreensContext = com.liferay.mobile.screens.context.LiferayServerContext;
            LiferayScreensContext.setCompanyId(this.COMPANY_ID);
            LiferayScreensContext.setGroupId(this.GROUP_ID);
            LiferayScreensContext.setServer(this.SERVER);
            LiferayScreensContext.setPortalVersion(com.liferay.mobile.screens.context.LiferayPortalVersion.VERSION_70);

        } else {
            console.log("screens context ios");

            LiferayServerContext.companyId = this.COMPANY_ID;
            LiferayServerContext.groupId = this.GROUP_ID;
            LiferayServerContext.server = this.SERVER;
            LiferayServerContext.serverVersion = this.SERVER_VERSION_IOS;
        }
    }
}