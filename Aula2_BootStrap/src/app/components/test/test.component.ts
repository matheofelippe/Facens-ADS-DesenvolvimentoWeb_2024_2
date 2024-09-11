import { NgForm } from '@angular/forms';
import { Aluno } from './Aluno';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})

export class TestComponent {
  aluno: Aluno = new Aluno('João', 20);

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
