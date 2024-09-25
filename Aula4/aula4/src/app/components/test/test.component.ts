import { Component } from '@angular/core';
import { Aluno } from './Aluno';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  aluno: Aluno = new Aluno('João', 23);
  
  onSubmit(form: NgForm){
    console.log(form.value)
  }
}
