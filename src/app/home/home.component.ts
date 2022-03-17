import { Component, OnInit } from '@angular/core';
import { City, DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  cities: City[]=[];
  title = 'Día 4 del reto';

  selection!:City;

  criteria = '';

  constructor (private readonly dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.getCities()
    .subscribe(resCities => {
      //recibimos la data
      this.cities = [...resCities];
    });
  }

  updateCity(city: City): void{
    this.dataService.updateCity(city).subscribe( res =>{
      const tempArray = this.cities.filter(item => item._id!==city._id);
      this.cities=[...tempArray, city];
      this.onClear();
    });
  }
  addNewCity(city: string):void{
    this.dataService.addNewCity(city).subscribe(res => {
      this.cities.push(res);
    });
  }
  onCitySelected(city: City):void{
    //console.log('City ->' , city);
    this.selection = city;
  }

  onCityDeleted(id: string):void{
    //console.log('id',id)
    if(confirm('Are you sure?')){
      this.dataService.deleteCity(id).subscribe(res => {
        const tempArray = this.cities.filter(city => city._id!==id);
        this.cities = [...tempArray];
        this.onClear();
      });
    }
  }

  onClear():void{
    this.selection = {
       _id:'',
       name:''
    };
  }
}
