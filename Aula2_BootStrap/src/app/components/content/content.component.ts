import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  index: number = 1;
  descricao: string = 'Descrição da imagem 1';

  card = {
    title: 'Card 1',
    description: 'This is the content of card 1.',
  }

  constructor() {
    console.log('AppComponent: constructor');
  }

  onChangeImage() {
    this.index ++;
  }

  onSubmit(form: NgForm) {
    this.card.description = this.descricao;
  }
}
