import {NgModule} from "@angular/core"
import {AppComponent} from "./app.component"
import {BrowserModule} from "@angular/platform-browser"
import { EmployeeModule } from "./EmployeeModule/employee.module";
import {RouterModule,Routes} from "@angular/router"
import { CustomerComponent, ProductComponent, EmployeeComponent } from "./EmployeeModule/Components/EmployeeComponent/employee.component";


const r:Routes=[{path:'customer',component:CustomerComponent},
{path:'product',component:ProductComponent},
{path:'employee',component:EmployeeComponent}];



@NgModule({
    imports:[BrowserModule,EmployeeModule,
    RouterModule.forRoot(r,{useHash:true})
    
    ],
    declarations:[AppComponent],
    bootstrap:[AppComponent]
})
export class AppModule{

}