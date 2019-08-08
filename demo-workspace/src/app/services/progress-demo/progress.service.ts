import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  private progress: number = 0

  private em: EventEmitter<number> = new EventEmitter()

  constructor() { }

  makeProgress(isNv: boolean) {
    if (isNv) {
      this.progress--
    } else {
      this.progress++
    }
    this.em.emit(this.progress)
  }

  onProgressEvent(fn: (n : number)=>void) {
    this.em.subscribe(fn)
  }
}
