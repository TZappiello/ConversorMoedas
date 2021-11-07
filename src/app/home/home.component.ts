import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //public listadeMoedas:object = {}
  //public listadeMoedas1:any;

  public resultadoConvercao = "00"
  public moeda1: any;
  public moeda2: any;
  public valor: any;
  public lista = new Array();

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.listarTodasMoedas()
  }

  listarTodasMoedas() {
    this.api.buscarMoedas().subscribe(res => {
      console.log(res, "minhas moedas")

      this.lista.push(res.ARS)
      this.lista.push(res.USD)
      this.lista.push(res.BTC)
      this.lista.push(res.GBP)
      this.lista.push(res.EUR)
      this.lista.push(res.JPY)
      this.lista.push(res.ETH)

    })
  }

  fazerConversao() {
    let conta = this.moeda1 * this.moeda2;
    this.resultadoConvercao = conta.toFixed(2);
    console.log(this.resultadoConvercao);
  }

}