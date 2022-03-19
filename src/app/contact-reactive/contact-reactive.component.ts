import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss']
})
export class ContactReactiveComponent implements OnInit {

  contactFormReactive !: FormGroup;
  name!: string;
  departaments: string[] =[];
  selectedCity$ = this.dataService.selectedCity$; 

  constructor(private readonly fb: FormBuilder, 
    private readonly route: ActivatedRoute,
    private readonly dataService: DataService) { }

  ngOnInit(): void {
    //resolver
    this.departaments = this.route.snapshot.data['departaments'];

    this.route.queryParams.subscribe((params: Params) =>{
        this.name=params['name'];
      }
    );
    this.contactFormReactive = this.initForm();
    //this.onPathValue();
    //this.onSetValue();

  }

  onPathValue(): void{
    this.contactFormReactive.patchValue({name:'Brayan'});
  }

  onSetValue(): void{
    //this.contactFormReactive.setValue({comment:'Hola'});
    //Este obliga a tener que setiar todos los valores
  }

  onSubmit() : void{
    console.log('Form ->',this.contactFormReactive.value);
  }

  initForm(): FormGroup{
    //declarar las propiedades que tiene nuestro formulario lo hacemos con el Form Builder
    //Para usarlo debemos inicializarlo
    return this.fb.group({
      name:['', [Validators.required, Validators.minLength(3)]],
      checkAdult:['', [Validators.required]],
      departament:[''],
      comment:['', [Validators.required]],
    })
  }
}
