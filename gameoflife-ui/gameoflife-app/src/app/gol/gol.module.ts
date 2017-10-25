import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {GolRoutingModule} from "./gol.routing.module";
import {PlayComponent} from "./play/play.component";
import {RulesComponent} from "./rules/rules.component";
import {GolService} from "./service/gol.service";

@NgModule({
  imports: [
    CommonModule,
    GolRoutingModule
  ],
  providers: [
    GolService,
  ],
  declarations: [
    RulesComponent,
    PlayComponent
  ],
})
export class GolModule { }
