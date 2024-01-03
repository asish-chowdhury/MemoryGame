import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemoryGameComponent } from './memory-game/memory-game.component';
import { HardLevelComponent } from './hard-level/hard-level.component';

@NgModule({
  declarations: [
    AppComponent,
    MemoryGameComponent,
    HardLevelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
