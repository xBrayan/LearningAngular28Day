import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name!: string;
  //name = "Domini";
  cities = ['Twinza', '1ero de Mayo', 'Eloy Alfaro', 'Las Peñas'];
  title = 'Día 4 del reto';
  url = 'https://res.cloudinary.com/practicaldev/image/fetch/s--9O4-RiZT--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://miro.medium.com/max/990/1%2AOc2PsJ-QKOUG2I8J3HNmWQ.png';
  selection!:string;

  addNewCity(city: string):void{
    this.cities.push(city);
  }
  onCityClicked(city: string):void{
    console.log('City ->' , city);
    this.selection = city;
  }

  onClear():void{
    this.selection = '';
  }
}
