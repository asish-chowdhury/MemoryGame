import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MemoryGameComponent } from './memory-game/memory-game.component';
import { HardLevelComponent } from './hard-level/hard-level.component';


const routes: Routes = [
  { path: 'easy', component: MemoryGameComponent },
  { path: 'hard', component: HardLevelComponent },
  { path: '', redirectTo: '/easy', pathMatch: 'full' }, // Default route to 'easy'
  { path: '**', redirectTo: '/easy' }, // Redirect any unmatched route to 'easy'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
