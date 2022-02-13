import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  // -> bastick `` 
  //template: `<button>{{label}} </button>`,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnChanges, OnInit, OnDestroy {

  //Cuando no asigno !
  @Input() color!: string;
  @Input() label!: string;
  @Input() selection!: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change->',changes);
  }

  ngOnInit(): void {
    console.log('OnInit ->');
  }

  ngOnDestroy(): void {
    console.log('Destroy');
  }

}
