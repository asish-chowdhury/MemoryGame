import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
