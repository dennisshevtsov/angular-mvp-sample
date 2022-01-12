import { Injectable,     } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';

import { Observable, } from 'rxjs';
import { map,        } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RouteParamsProvider {
  public constructor(
    private readonly route: ActivatedRoute,
  ) {}

  public receive<T>(): Observable<T> {
    return this.route.paramMap.pipe(map(paramMap => {
      const buildingParams: any = {};
      const builtParams: T = buildingParams as T;

      Object.getOwnPropertyNames(builtParams)
            .forEach(propertyName => {
              const propertyValue = paramMap.get(propertyName);

              if (propertyValue) {
                buildingParams[propertyName] = propertyValue;
              }
            });

      return builtParams;
    }))
  }
}
