import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.css']
})
export class FuncionarioCardComponent {
// o @Input é utilizado para a definção de uma variavel que será utilizada
// em outro componente no caso app.component.html
//  @Input() funcionario: any;

// Podemos utilizar o Input com outro nome que não seja o funcionario
// nesse caso no app.component não vamos utilizar o nome funcionario para a variavel.
@Input('obj') funcionario: any;
 
}
