import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {RulesComponent} from "./rules/rules.component";
import {PlayComponent} from "./play/play.component";

const WorldRoutes: Routes = [
  { path: "world/rules", component: RulesComponent },
  { path: "world/play", component: PlayComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(WorldRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class WorldRoutingModule {}
