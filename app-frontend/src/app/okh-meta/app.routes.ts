import { Routes } from '@angular/router';
import { BoardComponent as UserBoard } from '../roles/user/board/board.component';
import { AddEventComponent as UserAddEvent } from '../roles/user/add-event/add-event.component';
import { GetEventsComponent as UserGetEvents } from '../roles/user/get-events/get-events.component';
import { BoardComponent as AdminBoard } from '../roles/admin/board/board.component';
import { GetComplaintsComponent as AdminGetComplaints} from '../roles/admin/get-complaints/get-complaints.component';
import { GetEventsComponent as AdminGetEvents } from '../roles/admin/get-events/get-events.component'; 
import { BoardComponent } from '../test/board/board.component';
import { GetAttendancesComponent } from '../roles/user/get-attendances/get-attendances.component';

export const routes: Routes = [
    { 
        path: 'user', 
        component: UserBoard,
        children:[
            { path:'events', component: UserGetEvents },
            { path:'event/add', component: UserAddEvent },
            { path:'notifs', component: GetAttendancesComponent },
        ]
    },
    { 
        path: 'admin', 
        component: AdminBoard,
        children:[
            { path:'events', component: AdminGetEvents },
            { path:'complaints', component: AdminGetComplaints },
        ]
    },
    { path: 'test/board', component: BoardComponent },
];
