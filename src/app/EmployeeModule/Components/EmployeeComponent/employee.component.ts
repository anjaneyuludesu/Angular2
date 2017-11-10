import {Component } from "@angular/core"
import {Http} from "@angular/http"
@Component({
    selector:'employee',
    templateUrl:'./employee.component.html',
})
export class EmployeeComponent{
    IsAddNew:boolean;
    myData:any;
    constructor(h:Http) {
        h.get("https://jsonplaceholder.typicode.com/posts")
        .subscribe(x=>{
           this.myData=x.json();
        });
        this.IsAddNew=false;
    }
     
    ShowAddNew():void{
     //   this.myForm.reset();
        this.IsAddNew=true;
    }
    HideAddNew():void{
        this.IsAddNew=false;
    }
}


@Component({
    selector:"customer",
    template:'<h1>Customer</h1>'
})
export class CustomerComponent{

}


@Component({
    selector:"product",
    template:'<h1>Product</h1>'
})
export class ProductComponent{

}