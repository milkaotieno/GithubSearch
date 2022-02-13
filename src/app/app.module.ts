import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ResultsComponent } from './components/results/results.component';
import { SearchComponent } from './components/search/search.component';
import { DateCountPipe } from './date-count.pipe';
import { HoverDirectiveDirective } from './hover-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ResultsComponent,
    SearchComponent,
    DateCountPipe,
    HoverDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
