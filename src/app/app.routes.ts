import { Routes } from '@angular/router';
import {IndexComponent} from "./components/index/index.component";
import {AboutComponent} from "./components/about/about.component";
import {MainComponent} from "./components/main/main.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";

export const routes: Routes = [
    { path: "", component: MainComponent},
    { path: "index", component: IndexComponent},
    { path: "about", component: AboutComponent},
    { path: "main", component: MainComponent},
    // { path: "**", redirectTo: "/main"}
    { path: "**", component: NotFoundComponent }
];
