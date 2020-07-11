import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
@Injectable({
  providedIn: 'root'
})
export class MapService {
  capitals: string = '/assets/data/usa-capitals.geojson';
  //console.log(capitals);
  constructor(private http: HttpClient) {
  }

  makeCapitalMarkers(map: L.Map): void {
    this.http.get(this.capitals).subscribe((res: any) => {
      for (const c of res.features) {
        const lat = c.geometry.coordinates[0];
        const lon = c.geometry.coordinates[1];
        const marker = L.marker([lon, lat]).addTo(map);
      }
    });
  }
}
