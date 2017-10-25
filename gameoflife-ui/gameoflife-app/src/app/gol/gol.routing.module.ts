import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {RulesComponent} from "./rules/rules.component";
import {PlayComponent} from "./play/play.component";

const GolRoutes: Routes = [
  { path: "gol/rules", component: RulesComponent },
  { path: "gol/play", component: PlayComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(GolRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class GolRoutingModule {}
