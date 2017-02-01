import {Component} from "@angular/core";
import {ScreensContext} from "../shared/context/screens-context.service";
import app = require('application');

declare let com: any;

declare let ImageGalleryScreenlet: any;

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

            this.createScreenlet(null, "default", 10, 10, true, cachePolicy);
        } else {
            cachePolicy = "remote-only";
            let statusBarHeight = UIApplication.sharedApplication.statusBarFrame.size.height;
            let screenWidth = UIScreen.mainScreen.applicationFrame.size.width;
            let screenHeigt = UIScreen.mainScreen.applicationFrame.size.height;

            this.createScreenlet(CGRectMake(0, statusBarHeight, screenWidth, screenHeigt), "default-grid", 10, 10, true, cachePolicy);
        }
    }

    createScreenlet(size, theme, pageSize, firstPageSize, autoload, cachePolicy) {
        if (app.android) {
            this.imageGallery = new com.liferay.mobile.screens.imagegallery.ImageGalleryScreenlet(app.android.foregroundActivity);

            this.initImageGalleryAttributes(firstPageSize, pageSize, autoload, cachePolicy);
            this.setLayout(theme);

            this.view.setScreenlet(this.getScreenlet());
            this.getScreenlet().setViewModel(this.view);

            this.attach();
            this.imageGallery.load();
        } else {
            this.imageGallery = new ImageGalleryScreenlet(size, theme);

            this.initImageGalleryAttributes(firstPageSize, pageSize, autoload, cachePolicy);

            app.ios.rootController.view.addSubview(this.imageGallery);
        }
    }

    setDelegate(delegate) {
        this.getScreenlet().delegate = delegate;
    }

    setListener(listener) {
        this.getScreenlet().setListener(listener);
    }

    private initImageGalleryAttributes(firstPageSize, pageSize, autoload, cachePolicy) {
        if (app.android) {
            this.imageGallery.setRepositoryId(this.screensContext.GROUP_ID);
            this.imageGallery.setFolderId(this.screensContext.IMAGE_GALLERY_FOLDER_ID);
            this.imageGallery.setAutoLoad(autoload);
            this.imageGallery.setFirstPageSize(firstPageSize);
            this.imageGallery.setPageSize(pageSize);
            this.imageGallery.setCachePolicy(cachePolicy);
            let localeUS = com.liferay.mobile.screens.util.LiferayLocale.getDefaultLocale();
            this.imageGallery.setLocale(localeUS);
            let picasso = com.liferay.mobile.screens.context.PicassoScreens;
            picasso.setCachePolicy(cachePolicy);


        } else {
            this.imageGallery.repositoryId = this.screensContext.GROUP_ID;
            this.imageGallery.folderId = this.screensContext.IMAGE_GALLERY_FOLDER_ID;
            this.imageGallery.autoload = autoload;
            this.imageGallery.firstPageSize = firstPageSize;
            this.imageGallery.pageSize = pageSize;
            this.imageGallery.offlinePolicy = cachePolicy;
        }
    }

    private attach() {
        let containerId = app.android.context.getResources().getIdentifier("content", "id", "android");
        let activity = app.android.foregroundActivity;
        let container = activity.findViewById(containerId);
        let matchParent = android.widget.LinearLayout.LayoutParams.MATCH_PARENT;
        container.removeAllViews();
        container.addView(this.view, matchParent, matchParent);
    }

    private getScreenlet() {
        return this.imageGallery;
    }

    private setLayout(imageGalleryLayout) {
        let layout = app.android.context.getResources().getIdentifier("gallery_" + imageGalleryLayout, "layout", app.android.context.getPackageName());
        let layoutInflater = android.view.LayoutInflater;

        this.view = layoutInflater.from(app.android.foregroundActivity).inflate(layout, null);
    }
}