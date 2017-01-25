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
        this.imageGalleryScreenlet.createDefaultScreenlet();
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
                /* delegate methods */
            }, {protocols: [ImageGalleryScreenletDelegate]});

            this.imageGalleryScreenlet.setDelegate(new delegate());
        }
    }
}