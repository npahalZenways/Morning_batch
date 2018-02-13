import { NgModule, Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
    template: '<p>Admin Component</p>'
})
export class AdminComponent {
    
}

@NgModule({
    declarations: [
        AdminComponent
    ],
    imports: [
        RouterModule.forChild([{
            path:'',
            component: AdminComponent
        }])
    ],
    providers: []
})
export class AdminModule {}