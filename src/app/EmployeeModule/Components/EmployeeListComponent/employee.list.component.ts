import {Component, EventEmitter, Output, Input } from "@angular/core"
import { Employee } from "../../../Models/Employee";
import { EmployeeService } from "../../../services/employee.service";
@Component({
    selector:'employee-list',
    templateUrl:'./employee.list.component.html',
})
export class EmployeeListComponent{
    Employees:Array<Employee>;
    @Input() TitleText:string="";
    @Output() addClick:EventEmitter<void>=new EventEmitter<void>();
    constructor(private e:EmployeeService) {
            this.Employees=this.e.getEmployee();
        e.onChangeEmployee.subscribe(x=>{
            alert('data Changed')
        });
    }
    ShowAddNew():void{
        this.addClick.emit();
    }
}