import { Component, signal, computed, WritableSignal } from '@angular/core';

import { dummyUsers } from './dummy-users';
import { Console } from 'console';

const randomUser = Math.floor(Math.random() * dummyUsers.length);

@Component({
  selector: 'app-normal',
  standalone: true,
  imports: [],
  templateUrl: './normal.component.html',
  styleUrl: './normal.component.scss',
})
export class NormalComponent {
  selectedUser = signal(dummyUsers[0]);
  imagePath = computed(() => `assets/${this.selectedUser().avatar}`);

  // get imagePath() {
  //   return `assets/${this.selectedUser.avatar}`;
  // }

  onSelected() {
    console.log('User selected');
  }
}
