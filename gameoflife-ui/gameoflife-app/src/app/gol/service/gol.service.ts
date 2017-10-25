import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Headers, Http, Response} from "@angular/http";
import {Service} from "./service";

@Injectable()
export class GolService extends Service {

  private static BASE_PATH = "api/gol";

  constructor(private http: Http) {
    super();
  }

  nextGeneration(world: number[]): Observable<Response> {
    return this.http.post(`${GolService.BASE_PATH}/phase`, world,
        {headers: new Headers({"Content-Type": "application/json; charset=utf-8"})});
  }


}
