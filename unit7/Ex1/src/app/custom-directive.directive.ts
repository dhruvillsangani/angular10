import { Directive, ElementRef, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective implements OnInit{

  @Input() appCustomDirective: any;
  // @HostBinding('style.backgroundColor') color:string;
	// @HostBinding('textContent') text:string; 
  

 color:string;
 text:string;

  constructor(private elementRef:ElementRef) { 

  }

  ngOnInit(){
    console.log(this.color=this.appCustomDirective.colour);
    console.log(this.text = this.appCustomDirective.text);
    
        //  this.color=this.appCustomDirective.colour;
        //  this.text = this.appCustomDirective.text;

    // this.elementRef.nativeElement.style.background = '';
    // console.log(this.color);
    
    
  }
 
  
}
