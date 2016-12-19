import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";

declare var com: any;

@Injectable()
export class ScreensContext {

    COMPANY_ID = 20116;
    GROUP_ID = 33475;
    SERVER = 'http://screens-challenge.liferay.org.es';
    ANONYMOUS_API_USERNAME = 'anonymous1@liferay.com';
    ANONYMOUS_API_PASSWORD = 'anonymous1';

    IMAGE_GALLERY_FOLDER_ID = 33652;

    constructor() {
        let LiferayScreensContext = com.liferay.mobile.screens.context.LiferayServerContext;
        LiferayScreensContext.setCompanyId(this.COMPANY_ID);
        LiferayScreensContext.setGroupId(this.GROUP_ID);
        LiferayScreensContext.setServer(this.SERVER);
    }
}