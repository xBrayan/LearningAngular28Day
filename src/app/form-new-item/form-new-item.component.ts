import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import { City } from '../services/data.service';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormNewItemComponent{

  @Input() label!: string;
  @Input() className = 'btn-primary';
  @Input() selection !: City;

  @Output() newItemEvent = new EventEmitter<string>();
  
  @Output() updateItemEvent = new EventEmitter<City>();

  onAddNewItem(item: string):void{
    console.log('Item ->',item);
    this.newItemEvent.emit(item);
  }

  onUpdateItem(item: City, change: string): void{
    //tipamos
    const city: City = {
      _id: item._id,
      name: change
    };
    this.updateItemEvent.emit(city);
  }


  /*
  counterRender(): boolean{
    console.log('Render Form');
    return true;
  }*/

}
