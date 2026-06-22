import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface Imodedas {
  ARS: {
    ask: string,
    bid: string,
    code: string,
    codein: string,
    create_date: string,
    high: string,
    low: string,
    name: string,
    pctChange: string,
    timestamp: string,
    varBid: string
  },
  USD: {
    ask: string,
    bid: string,
    code: string,
    codein: string,
    create_date: string,
    high: string,
    low: string,
    name: string,
    pctChange: string,
    timestamp: string,
    varBid: string
  }

  BTC: {
    ask: string,
    bid: string,
    code: string,
    codein: string,
    create_date: string,
    high: string,
    low: string,
    name: string,
    pctChange: string,
    timestamp: string,
    varBid: string
  }

  GBP: {
    ask: string,
    bid: string,
    code: string,
    codein: string,
    create_date: string,
    high: string,
    low: string,
    name: string,
    pctChange: string,
    timestamp: string,
    varBid: string
  }

  EUR: {
    ask: string,
    bid: string,
    code: string,
    codein: string,
    create_date: string,
    high: string,
    low: string,
    name: string,
    pctChange: string,
    timestamp: string,
    varBid: string
  }

  JPY: {
    ask: string,
    bid: string,
    code: string,
    codein: string,
    create_date: string,
    high: string,
    low: string,
    name: string,
    pctChange: string,
    timestamp: string,
    varBid: string
  }

  ETH: {
    ask: string,
    bid: string,
    code: string,
    codein: string,
    create_date: string,
    high: string,
    low: string,
    name: string,
    pctChange: string,
    timestamp: string,
    varBid: string
  }
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  buscarMoedas() {
    return this.http.get<Imodedas>(`https://economia.awesomeapi.com.br/json/all`)
  }

}

