import "rxjs/add/operator/map";

export abstract class Service {

  handleError(errorMessage: string): boolean {
      console.log(errorMessage);
      return false;
  }

}
