import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {AppRoutes} from "./app.routes";
import {GolModule} from "./gol/gol.module";

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserModule,
    HttpModule,
    GolModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
