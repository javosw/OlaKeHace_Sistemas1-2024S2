import { Routes } from '@angular/router';
import { BoardComponent as UserBoard } from '../roles/user/board/board.component';
import { EventosComponent as UserGetEvents } from '../roles/user/eventos/eventos.component';
import { AddEventComponent as UserAddEvent} from '../roles/user/add-event/add-event.component';
import { NotifsComponent as UserNotifs } from '../roles/user/notifs/notifs.component';

export const routes: Routes = [
    { 
        path: 'user', 
        component: UserBoard,
        children:[
            { path:'event/add', component: UserAddEvent },
            { path:'events', component: UserGetEvents },
            { path:'notifs', component: UserNotifs },
        ]
    },
    { path: 'test', component: UserBoard },
];
