import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-data/dummy-users';

// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'easy-task';
  users = DUMMY_USERS;

  selectedId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedId!);
  }

  onUserSelect(userId: string) {
    this.selectedId = userId;
  }
}
