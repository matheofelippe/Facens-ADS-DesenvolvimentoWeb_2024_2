import { Component } from '@angular/core';

interface Tarefa{
  descricao: string,
  concluida: boolean
}

@Component({
  selector: 'app-lista-de-tarefas',
  templateUrl: './lista-de-tarefas.component.html',
  styleUrl: './lista-de-tarefas.component.css'
})
export class ListaDeTarefasComponent {

tarefas: Tarefa[] = [
  {descricao: 'Estudar HTML', concluida: true},
  {descricao: 'Estudar CSS', concluida: false},
  {descricao: 'Estudar JavaScript', concluida: true},
  {descricao: 'Estudar Angular', concluida: false},
  {descricao: 'Estudar Typescript', concluida: false}
]

alteraStatus(tarefa:Tarefa) {
  tarefa.concluida = !tarefa.concluida;
}


}
