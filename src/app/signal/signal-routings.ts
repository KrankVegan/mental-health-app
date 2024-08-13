import { Route } from "@angular/router";
import { SignalComponent } from "./signal.component";

const ROUTES: Route[] = [
    {
    path: '',
    component: SignalComponent,

    children: [
        {
            path: '',
            pathMatch: 'full',
            redirectTo: 'signal-ejemplo1'
        },
        {
            path: 'signal-ejemplo1',
            loadComponent: () =>
        }
    ]
    }

]