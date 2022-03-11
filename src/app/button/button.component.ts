import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  // -> bastick `` 
  //template: `<button>{{label}} </button>`,
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

  //Cuando no asigno !
  @Input() color!: string;
  @Input() label!: string;
  @Input() selection!: string;

  /*
  counterRender(): boolean{
    console.log('Render Form')
    return true;
  }*/
}
