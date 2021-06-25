import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ListContainerComponent } from './list-container/list-container.component';
import { ListComponent } from './list-container/list/list.component';
import { SearchComponent } from './list-container/search/search.component';
import { DialogOverviewComponent } from './list-container/dialog-overview/dialog-overview.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faEdit, fas, faTrash } from '@fortawesome/free-solid-svg-icons';
import { DialogButtonComponent } from './list-container/dialog-button/dialog-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    ListContainerComponent,
    ListComponent,
    SearchComponent,
    DialogOverviewComponent,
    DialogButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIcons(faTrash, faEdit);
  }
}
