import { SignUpComponent } from "./pages/signup/signup.component";
import { ImageGalleryComponent } from "./pages/gallery/gallery.component";

export const routes = [
    { path: "", component: SignUpComponent },
    { path: "gallery", component: ImageGalleryComponent}
];

export const navigatableComponents = [
    SignUpComponent,
    ImageGalleryComponent
];