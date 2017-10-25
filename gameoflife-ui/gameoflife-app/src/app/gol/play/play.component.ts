import { Component, OnInit } from '@angular/core';
import {IntervalObservable} from "rxjs/observable/IntervalObservable";
import "rxjs/add/operator/takeWhile";
import {GolService} from "../service/gol.service";

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html'
})
export class PlayComponent implements OnInit {

  private isEvolutionEnabled: boolean;
  private worldService: GolService;
  private world: number[];
  private worldDimension: number;
  private numberOfCalls: number;

  constructor(worldService: GolService) {
    this.worldService = worldService;
  }

  ngOnInit() {
    this.initializeWorld(PlayComponent.emptyWorld(10));
    this.isEvolutionEnabled = false;
    this.numberOfCalls = 0;
  }

  private initializeWorld(arr): void {
    this.world = arr;
    this.worldDimension = arr.length;
  };

  startEvolution(): void {
    this.isEvolutionEnabled = true;
    IntervalObservable.create(1000)
      .takeWhile(() => this.isEvolutionEnabled) // only fires when component is alive
      .subscribe(() => {
        this.worldService.nextGeneration(this.world)
          .subscribe(evolvedWorld => {
            this.numberOfCalls++;
            this.world = evolvedWorld.json();
          });
      });
  };

  stopEvolution(): void{
    this.isEvolutionEnabled = false;
  };

  getNextStatusOfWorld(): void {
    this.worldService.nextGeneration(this.world)
      .subscribe(evolvedWorld => {
        this.numberOfCalls++;
        this.world = evolvedWorld.json();
      });
  };

  toggleCell(column, row): void {
    this.world[row][column] = !this.world[row][column];
  };

  addDimension(amount: number): void {
    const newDimension = this.worldDimension + amount;
    this.initializeWorld(PlayComponent.emptyWorld(newDimension <= 40 ? newDimension : 40));
  };

  removeDimension(amount: number): void {
    const newDimension = this.worldDimension - amount;
    this.initializeWorld(PlayComponent.emptyWorld(newDimension >= 3 ? newDimension : 3));
  };

  private static emptyWorld(dimension): number[] {
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

}
