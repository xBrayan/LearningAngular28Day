import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

interface ContactForm {
  name: string;
  checkAdult: boolean;
  departament: string;
  comment: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @ViewChild('contactForm') contactForm!: NgForm;

  id!: string;

  model = {
    name: '',
    checkAdult: false,
    departament: '',
    comment: '...',
  };

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
  }

  onSubmit(): void {
    console.log('Form Value Completo', this.contactForm);
  }
}
