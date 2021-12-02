import { Directive, ElementRef, OnInit } from "@angular/core";


@Directive({
    selector:'[basichighlight]'
})
export class basichighlight  implements OnInit{
constructor(private elementRef:ElementRef) {


}
    ngOnInit(): void {
        this.elementRef.nativeElement.style.background = 'red';
    }

} 