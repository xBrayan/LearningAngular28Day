import { Component} from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-sprinner',
  templateUrl: './sprinner.component.html',
  styleUrls: ['./sprinner.component.scss']
})
export class SprinnerComponent {
  isLoading$ = this.spinnerService.isLoading$;

  constructor(private readonly spinnerService : SpinnerService) { }


}
