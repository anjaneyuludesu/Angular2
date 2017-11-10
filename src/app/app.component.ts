import {Component } from "@angular/core"
import { Employee } from "./Models/Employee";
import {FormGroup,FormControl,Validators} from "@angular/forms"
import { EmployeeService } from "./services/employee.service";
@Component({
    selector:'my-app',
    templateUrl:'./app.component.html',
    providers:[{provide:EmployeeService,useClass:EmployeeService}]
})
export class AppComponent{
  
  

}