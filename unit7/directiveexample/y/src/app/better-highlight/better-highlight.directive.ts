import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor( private elRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');

  }
  @Input() text:string ="";

  @HostListener('mouseenter') mouseover() {
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');

  }

  @HostListener('mouseleave') mouseleave(){
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','green');

  }

}
