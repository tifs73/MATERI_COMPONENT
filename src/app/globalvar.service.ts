import { Injectable } from '@angular/core';

@Injectable()
export class GlobalvarService {

  private datanama : string = 'usercoba';
  constructor() { }

  public getNama() {
    return this.datanama;
  }

  public setNama(nama : string) {
    this.datanama = nama;
  }
}