import { Customer } from './../services/customer';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustRegService {

  domain: Customer={} as Customer
  cn=0
  constructor(){}
}
