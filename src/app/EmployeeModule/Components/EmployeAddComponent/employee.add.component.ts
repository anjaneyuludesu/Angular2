import {Component, EventEmitter, Output } from "@angular/core"
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { EmployeeService } from "../../../services/employee.service";
@Component({
    selector:'employee-add',
    templateUrl:'./employee.add.component.html',
})
export class EmployeeAddComponent{
    @Output() cancelClick:EventEmitter<void>=new EventEmitter<void>();
    
    myForm:FormGroup;
    constructor(private e:EmployeeService) {
        this.myForm=new FormGroup({
            EmpName:new FormControl('',[Validators.required]),
            Salary:new FormControl('',[Validators.required]),
            x:new FormControl()
        });
    }
    SaveEmp():void{
        this.e.saveEmployee(this.myForm.value);
        this.cancelClick.emit();
    }
    
   
    Cancel():void{
     this.cancelClick.emit();
    }
    
}