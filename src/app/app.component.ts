import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome: string = 'Luiz';
  ultimoId = 0;
  adicionado = false;
  funcionarios = [{ id: 0, nome: 'null' }];

  adicionar() {
      console.log(`Adicionando ${this.nome}`)
      this.adicionado = true;

      this.funcionarios.push({
        id: ++ this.ultimoId,
        nome: this.nome
      });
  }

}
