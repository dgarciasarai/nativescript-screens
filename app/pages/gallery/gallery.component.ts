import {ImageGalleryScreenletWrapper} from '../../ns/imagegalleryscreenlet-ns';
import {Component, OnInit} from "@angular/core";
import {ScreensContext} from "../../shared/context/screens-context.service";
import {Router} from "@angular/router";
import app = require('application');

declare let com: any;

declare let NSObject: any;
declare let ImageGalleryScreenletDelegate: any;

@Component({ 
    selector: "imagegallery", 
    providers: [ScreensContext, ImageGalleryScreenletWrapper], 
    template: ``
}) 
export class ImageGalleryComponent implements OnInit {
    
    constructor(private router: Router, private screensContext: ScreensContext, private imageGalleryScreenlet: ImageGalleryScreenletWrapper) {
        if(app.android) {
            this.imageGalleryScreenlet.createDefaultScreenlet();
        } else {
            let statusBarHeight = UIApplication.sharedApplication.statusBarFrame.size.height;
            let screenWidth = UIScreen.mainScreen.applicationFrame.size.width;
            let screenHeigt = UIScreen.mainScreen.applicationFrame.size.height;
            
            this.imageGalleryScreenlet.createScreenlet(CGRectMake(0, statusBarHeight, screenWidth, screenHeigt), "default-slideshow", 10, 10, true, "remote-only");
        }
    }

    ngOnInit() {
        this.renderGallery();
    }

    renderGallery() {
        console.log('trying to render image gallery' + app);

        let self = this;
        
        if (app.android) {            
            //this.imageGalleryScreenlet.setListener();
        } else {
            console.log("iOS!!!!" + app.ios);
            let delegate = NSObject.extend({
                screenletOnImageEntrySelected(screenlet, imageEntry){
                    console.log("You have selected imageEntry: " + imageEntry.debugDescription);
                }
            }, {protocols: [ImageGalleryScreenletDelegate]});

            this.imageGalleryScreenlet.setDelegate(new delegate());
        }
    }
}