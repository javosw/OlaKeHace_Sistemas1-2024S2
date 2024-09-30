import { Routes } from '@angular/router';
import { BoardComponent as UserBoard } from '../roles/user/board/board.component';
import { AddEventComponent as AddEvent } from '../roles/user/add-event/add-event.component';
import { GetEventsComponent as GetEvents } from '../roles/user/get-events/get-events.component';
import { GetNotifsComponent as GetNotifs } from '../roles/user/get-notifs/get-notifs.component';

export const routes: Routes = [
    { 
        path: 'user', 
        component: UserBoard,
        children:[
            { path:'events', component: GetEvents },
            { path:'event/add', component: AddEvent },
            { path:'notifs', component: GetNotifs },
        ]
    },
    { path: 'test', component: UserBoard },
];
