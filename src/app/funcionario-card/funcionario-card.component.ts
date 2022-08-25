import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  //styleUrls: ['./funcionario-card.component.css']
  styles: [`
    .card-body {
      text-transform: uppercase;
      color: blue;
    }
  `]
})
export class FuncionarioCardComponent {
// o @Input é utilizado para a definção de uma variavel que será utilizada
// em outro componente no caso app.component.html
//  @Input() funcionario: any;

// Podemos utilizar o Input com outro nome que não seja o funcionario
// nesse caso no app.component não vamos utilizar o nome funcionario para a variavel.
@Input('obj') funcionario: any;

//getClassesCss() {
 // return ['badge', 'badge-default'];
//}
isAdmin() {
  return this.funcionario.nome.startsWith('T');
}
getEstilosCartao() {
  return {
    // a borda dos cartoes vão aumentando
 //   'border-width': this.funcionario.id + 'px',
    'border-width.px': this.funcionario.id,
    // os cartão vão mudando de cor
    backgroundColor: this.funcionario.id % 2 === 0 
                  ? 'lightblue'  : 'lightgreen'
  };
}
 
}
