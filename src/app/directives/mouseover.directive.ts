import { Directive, ElementRef, Input,OnInit,HostListener } from "@angular/core";

@Directive({selector:'[mouseovercolor]'})
export class MouseOverDirective implements OnInit{
    @Input()mouseovercolor:string="red";
    constructor(private e:ElementRef) {
    }
    ngOnInit(): void{
    }

@HostListener('mouseenter')
    ChangeColor(){
        this.e.nativeElement.style.background=this.mouseovercolor;
    }

    @HostListener('mouseleave')
    ResetColor(){
        this.e.nativeElement.style.background="white";
    }
}