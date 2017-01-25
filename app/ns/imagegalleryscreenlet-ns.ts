import {Component} from "@angular/core";
import {ScreensContext} from "../shared/context/screens-context.service";
import app = require('application');

declare let com: any;

declare let ImageGalleryScreenlet: any;
declare let CacheStrategyType: any;

@Component({
    selector: "imagegalleryscreenletwrapper",
    template: ``
})
export class ImageGalleryScreenletWrapper {

    private imageGallery: any;
    private view: any;

    constructor(private screensContext: ScreensContext) {
    }

    createDefaultScreenlet() {
        let cachePolicy;
        if (app.android) {
            cachePolicy = com.liferay.mobile.screens.cache.CachePolicy.REMOTE_ONLY;
        } else {
            cachePolicy = "remote-only";
        }

        this.createScreenlet("default_grid", 10, 10, cachePolicy);
    }

    createScreenlet(theme, pageSize, firstPageSize, cachePolicy) {
        if (app.android) {
            this.imageGallery = new com.liferay.mobile.screens.imagegallery.ImageGalleryScreenlet(app.android.context);

            this.imageGallery.setRepositoryId(this.screensContext.GROUP_ID);
            this.imageGallery.setFolderId(this.screensContext.IMAGE_GALLERY_FOLDER_ID);
            this.imageGallery.setAutoLoad(true);
            this.imageGallery.setGroupId(this.screensContext.GROUP_ID);
            this.imageGallery.setFirstPageSize(firstPageSize);
            this.imageGallery.setPageSize(pageSize);

            let remoteOnly = cachePolicy;
            this.imageGallery.setCachePolicy(remoteOnly);
            let picasso = com.liferay.mobile.screens.context.PicassoScreens;
            picasso.setCachePolicy(remoteOnly);

            let localeUS = java.util.Locale.US;
            this.imageGallery.setLocale(localeUS);

            this.setLayout(theme);

            this.attach();
        } else {
            let statusBarHeight = UIApplication.sharedApplication.statusBarFrame.size.height;
            let screenWidth = UIScreen.mainScreen.applicationFrame.size.width;
            let screenHeigt = UIScreen.mainScreen.applicationFrame.size.height;

            this.imageGallery = new ImageGalleryScreenlet(CGRectMake(0, statusBarHeight, screenWidth, screenHeigt), theme);

            this.imageGallery.repositoryId = this.screensContext.GROUP_ID;
            this.imageGallery.folderId = this.screensContext.IMAGE_GALLERY_FOLDER_ID;
            this.imageGallery.autoload = true;
            this.imageGallery.groupId = this.screensContext.GROUP_ID;
            this.imageGallery.firstPageSize = firstPageSize;
            this.imageGallery.pageSize = pageSize;
            this.imageGallery.offlinePolicy = cachePolicy;

            app.ios.rootController.view.addSubview(this.imageGallery);
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
        return this.imageGallery;
    }

    private setLayout(imageGalleryLayout) {
        let layout = app.android.context.getResources().getIdentifier("gallery_" + imageGalleryLayout, "layout", app.android.context.getPackageName());
        let layoutInflater = android.view.LayoutInflater;
        this.view = layoutInflater.from(app.android.context).inflate(layout, null);
    }
}