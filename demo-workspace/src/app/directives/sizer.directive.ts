import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appSizer]'
})
export class SizerDirective implements OnInit {

  @Input('appSizer')
  config: {}

  @HostBinding('style.width.px')
  width: number

  @HostBinding('style.background-color')
  bkCl: string

  @HostBinding('style.color')
  fgCl: string

  constructor() { }

  ngOnInit() {
    this.width = this.config['wd']
    this.bkCl = this.config['bkCl']
    this.fgCl = this.config['fgCl']
  }

  @HostListener('mouseenter')
  mouseIn() {
    this.width = this.width + 50
  }

  @HostListener('mouseleave')
  mouseOut() {
    this.width = this.width - 50
  }
}

