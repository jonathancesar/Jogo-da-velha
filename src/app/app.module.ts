import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { JogoDaVelhaModule } from './jogo-da-velha/jogo-da-velha.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    
    JogoDaVelhaModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
