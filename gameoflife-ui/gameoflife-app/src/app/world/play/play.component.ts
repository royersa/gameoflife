import { Component, OnInit } from '@angular/core';
import {IntervalObservable} from "rxjs/observable/IntervalObservable";
import "rxjs/add/operator/takeWhile";
import {WorldService} from "../service/world.service";

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html'
})
export class PlayComponent implements OnInit {

  private isEvolutionEnabled: boolean;
  private worldService: WorldService;
  private world: number[];
  private worldDimension: number;

  constructor(worldService: WorldService) {
    this.worldService = worldService;
  }

  ngOnInit() {
    this.initializeWorld(this.emptyWorld(10));
    this.isEvolutionEnabled = false;
  }

  startEvolution(): void {
    IntervalObservable.create(1000)
      .takeWhile(() => this.isEvolutionEnabled) // only fires when component is alive
      .subscribe(() => {
        this.worldService.evolveWorld(this.world)
          .subscribe(evolvedWorld => {
            this.world = evolvedWorld.json();
          });
      });
  };

  stopEvolution(): void{
    this.isEvolutionEnabled = false;
  };

  getNextStatusOfWorld(): void {
    this.worldService.evolveWorld(this.world)
      .subscribe(evolvedWorld => {
        this.world = evolvedWorld.json();
      });
  };

  toggleCell(column, row): void {
    this.world[row][column] = !this.world[row][column];
  };

  private emptyWorld(dimension): number[] {
    let arr = [];
    for (let i = 0; i < dimension; i++) {
      arr[i] = [];
      for (let j = 0; j < dimension; j++) {
        arr[i][j] = false;
      }
    }
    return arr;
  }

  blinker(): any{
    return [
      [false, false, false],
      [true, true, true],
      [false, false, false]
    ];
  };

  pulsar(): any{
    let D = false;
    let L = true;

    return [
      [D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D],
      [D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D],
      [D, D, D, D, L, L, L, D, D, D, L, L, L, D, D, D, D],
      [D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D],
      [D, D, L, D, D, D, D, L, D, L, D, D, D, D, L, D, D],
      [D, D, L, D, D, D, D, L, D, L, D, D, D, D, L, D, D],
      [D, D, L, D, D, D, D, L, D, L, D, D, D, D, L, D, D],
      [D, D, D, D, L, L, L, D, D, D, L, L, L, D, D, D, D],
      [D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D],
      [D, D, D, D, L, L, L, D, D, D, L, L, L, D, D, D, D],
      [D, D, L, D, D, D, D, L, D, L, D, D, D, D, L, D, D],
      [D, D, L, D, D, D, D, L, D, L, D, D, D, D, L, D, D],
      [D, D, L, D, D, D, D, L, D, L, D, D, D, D, L, D, D],
      [D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D],
      [D, D, D, D, L, L, L, D, D, D, L, L, L, D, D, D, D],
      [D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D],
      [D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D, D]
    ];
  };

  addDimension(amount: number): void {
    const newDimension = this.worldDimension + amount;
    this.initializeWorld(this.emptyWorld(newDimension <= 40 ? newDimension : 40));
  };

  removeDimension(amount: number): void {
    const newDimension = this.worldDimension - amount;
    this.initializeWorld(this.emptyWorld(newDimension >= 3 ? newDimension : 3));
  };

  private initializeWorld(arr): void {
    this.world = arr;
    this.worldDimension = arr.length;
  };

}
