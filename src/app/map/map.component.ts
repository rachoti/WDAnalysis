import { Component, OnInit } from '@angular/core';
import { icon, Marker } from 'leaflet';
import * as L from 'leaflet';
import { MapService } from '../map/map.service';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  private map;
  constructor(private markerService: MapService) { }
  capitals=[
    {"lon":-86.279118, "lat":32.361538, "state":"Alabama", "city":"Montgomery"},
    {"lon":-134.41974, "lat":58.301935, "state":"Alaska", "city":"Juneau"},
    {"lon":-112.073844, "lat":33.448457, "state":"Arizona", "city":"Phoenix"},
    {"lon":-92.331122, "lat":34.736009, "state":"Arkansas", "city":"Little Rock"},
    {"lon":-121.468926, "lat":38.555605, "state":"California", "city":"Sacramento"},
    {"lon":-104.984167, "lat":39.7391667, "state":"Colorado", "city":"Denver"},
    {"lon":-72.677, "lat":41.767, "state":"Connecticut", "city":"Hartford"},
    {"lon":-75.526755, "lat":39.161921, "state":"Delaware", "city":"Dover"},
    {"lon":-84.27277, "lat":30.4518, "state":"Florida", "city":"Tallahassee"},
    {"lon":-84.39, "lat":33.76, "state":"Georgia", "city":"Atlanta"},
    {"lon":-157.826182, "lat":21.30895, "state":"Hawaii", "city":"Honolulu"},
    {"lon":-116.237651, "lat":43.613739, "state":"Idaho", "city":"Boise"},
    {"lon":-89.650373, "lat":39.78325, "state":"Illinois", "city":"Springfield"},
    {"lon":-86.147685, "lat":39.790942, "state":"Indiana", "city":"Indianapolis"},
    {"lon":-93.620866, "lat":41.590939, "state":"Iowa", "city":"Des Moines"},
    {"lon":-95.69, "lat":39.04, "state":"Kansas", "city":"Topeka"},
    {"lon":-84.86311, "lat":38.197274, "state":"Kentucky", "city":"Frankfort"},
    {"lon":-91.140229, "lat":30.45809, "state":"Louisiana", "city":"Baton Rouge"},
    {"lon":-69.765261, "lat":44.323535, "state":"Maine", "city":"Augusta"},
    {"lon":-76.501157, "lat":38.972945, "state":"Maryland", "city":"Annapolis"},
    {"lon":-71.0275, "lat":42.2352, "state":"Massachusetts", "city":"Boston"},
    {"lon":-84.5467, "lat":42.7335, "state":"Michigan", "city":"Lansing"},
    {"lon":-93.094, "lat":44.95, "state":"Minnesota", "city":"Saint Paul"},
    {"lon":-90.207, "lat":32.32, "state":"Mississippi", "city":"Jackson"},
    {"lon":-92.189283, "lat":38.572954, "state":"Missouri", "city":"Jefferson City"},
    {"lon":-112.027031, "lat":46.595805, "state":"Montana", "city":"Helena"},
    {"lon":-96.675345, "lat":40.809868, "state":"Nebraska", "city":"Lincoln"},
    {"lon":-119.753877, "lat":39.160949, "state":"Nevada", "city":"Carson City"},
    {"lon":-71.549127, "lat":43.220093, "state":"New Hampshire", "city":"Concord"},
    {"lon":-74.756138, "lat":40.221741, "state":"New Jersey", "city":"Trenton"},
    {"lon":-105.964575, "lat":35.667231, "state":"New Mexico", "city":"Santa Fe"},
    {"lon":-73.781339, "lat":42.659829, "state":"New York", "city":"Albany"},
    {"lon":-78.638, "lat":35.771, "state":"North Carolina", "city":"Raleigh"},
    {"lon":-100.779004, "lat":48.813343, "state":"North Dakota", "city":"Bismarck"},
    {"lon":-83.000647, "lat":39.962245, "state":"Ohio", "city":"Columbus"},
    {"lon":-97.534994, "lat":35.482309, "state":"Oklahoma", "city":"Oklahoma City"},
    {"lon":-123.029159, "lat":44.931109, "state":"Oregon", "city":"Salem"},
    {"lon":-76.875613, "lat":40.269789, "state":"Pennsylvania", "city":"Harrisburg"},
    {"lon":-71.422132, "lat":41.82355, "state":"Rhode Island", "city":"Providence"},
    {"lon":-81.035, "lat":34, "state":"South Carolina", "city":"Columbia"},
    {"lon":-100.336378, "lat":44.367966, "state":"South Dakota", "city":"Pierre"},
    {"lon":-86.784, "lat":36.165, "state":"Tennessee", "city":"Nashville"},
    {"lon":-97.75, "lat":30.266667, "state":"Texas", "city":"Austin"},
    {"lon":-111.892622, "lat":40.7547, "state":"Utah", "city":"Salt Lake City"},
    {"lon":-72.57194, "lat":44.26639, "state":"Vermont", "city":"Montpelier"},
    {"lon":-77.46, "lat":37.54, "state":"Virginia", "city":"Richmond"},
    {"lon":-122.893077, "lat":47.042418, "state":"Washington", "city":"Olympia"},
    {"lon":-81.633294, "lat":38.349497, "state":"West Virginia", "city":"Charleston"},
    {"lon":-89.384444, "lat":43.074722, "state":"Wisconsin", "city":"Madison"},
    {"lon":-104.802042, "lat":41.145548, "state":"Wyoming", "city":"Cheyenne"}
  ];
  
  ngOnInit() {
    console.log(this.capitals);
    this.initMap();
    this.markerService.makeCapitalMarkers(this.map);
  }
  private initMap(): void {
    this.map = L.map('map', {
      center: [39.8282, -98.5795],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

}
