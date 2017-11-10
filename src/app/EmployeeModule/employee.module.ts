import {NgModule} from "@angular/core"
import * as e from "./Components/EmployeeComponent/employee.component";
import { EmployeeListComponent } from "./Components/EmployeeListComponent/employee.list.component";
import { EmployeeAddComponent } from "./Components/EmployeAddComponent/employee.add.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import {HttpModule} from "@angular/http"
import { MouseOverDirective } from "../directives/mouseover.directive";
import { NamePipe } from "../pipes/name.pipe";
@NgModule({
    declarations:[e.EmployeeComponent,MouseOverDirective,
        EmployeeListComponent,e.CustomerComponent,e.ProductComponent,NamePipe,
        EmployeeAddComponent],
        exports:[e.EmployeeComponent,e.CustomerComponent,e.ProductComponent],        
        imports:[CommonModule,ReactiveFormsModule,HttpModule]
})
export class EmployeeModule{

}