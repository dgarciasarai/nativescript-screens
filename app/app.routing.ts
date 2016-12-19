import { SignUpComponent } from "./pages/signup/signup.component";
import { ImageGalleryComponent } from "./pages/gallery/gallery.component";

export const routes = [
    { path: "", redirectTo: "/signup", pathMatch: "full" },
    { path: "signup", component: SignUpComponent },
    { path: "gallery", component: ImageGalleryComponent }
];