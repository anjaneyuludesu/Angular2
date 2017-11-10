import { Employee } from "../Models/Employee";
import { EventEmitter } from "@angular/core";

export class EmployeeService{
    Employees:Array<Employee>;
    public onChangeEmployee:EventEmitter<void>
    =new EventEmitter<void>();
    constructor() {
        this.Employees=new Array<Employee>();
        this.Employees.push(new Employee("Emp11",11000));
        this.Employees.push(new Employee("Emp22",22000));
        this.Employees.push(new Employee("Emp33",33000));
    }

    getEmployee():Array<Employee>{
        return this.Employees;
    }
    saveEmployee(e:Employee){
        this.Employees.push(e);
        this.onChangeEmployee.emit();
    }
}

