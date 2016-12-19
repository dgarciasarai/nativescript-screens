import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AppComponent } from "./app.component";
import { ImageGalleryComponent } from "./pages/gallery/gallery.component";
import { SignUpComponent } from "./pages/signup/signup.component";
import { routes } from "./app.routing";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        SignUpComponent,
        ImageGalleryComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}