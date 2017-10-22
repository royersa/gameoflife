import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {AppRoutes} from "./app.routes";
import {WorldModule} from "./world/world.module";

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserModule,
    HttpModule,
    WorldModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
