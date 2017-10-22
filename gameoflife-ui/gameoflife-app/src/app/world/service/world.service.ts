import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Headers, Http, Response} from "@angular/http";
import {Service} from "./service";

@Injectable()
export class WorldService extends Service {

  private static BASE_PATH = "api/world";

  constructor(private http: Http) {
    super();
  }

  evolveWorld(world: number[]): Observable<Response> {
    return this.http.post(`${WorldService.BASE_PATH}/phase`, world,
        {headers: new Headers({"Content-Type": "application/json; charset=utf-8"})});
  }


}
