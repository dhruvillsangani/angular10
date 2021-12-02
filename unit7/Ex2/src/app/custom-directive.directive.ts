import { Directive ,Input,HostBinding, ElementRef} from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  @Input() appCustomDirective: any;
   @HostBinding('style.backgroundColor') color:string;
	 @HostBinding('textContent') text:string; 
  


    constructor(private elementRef:ElementRef) { 

  }

  ngOnInit(){
    console.log(this.color=this.appCustomDirective.colour);
    console.log(this.text = this.appCustomDirective.text);
    
          this.color=this.appCustomDirective.colour;
          this.text = this.appCustomDirective.text;

    // this.elementRef.nativeElement.style.background = '';
    // console.log(this.color);
    
    
  }
 

}
