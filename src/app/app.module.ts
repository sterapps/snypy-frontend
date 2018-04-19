import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgSelectModule } from '@ng-select/ng-select';
import { Ng2HandySyntaxHighlighterModule } from 'ng2-handy-syntax-highlighter';
import { NgxResourceFactoryModule } from 'ngx-resource-factory';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { ServicesModule } from './services/services.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

/**
 * Icons
 */
import {
  faCoffee, faCode, faSyncAlt, faGlobe, faEye, faEyeSlash, faStar, faTag, faCloudUploadAlt, faCloudDownloadAlt, faUser, faPlus
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { LablesComponent } from './components/lables/lables.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { MenuComponent } from './components/menu/menu.component';

library.add(faCoffee, faCode, faSyncAlt, faGlobe, faEye, faEyeSlash, faStar, faTag, faCloudUploadAlt, faCloudDownloadAlt, faUser, faPlus);


@NgModule({
  declarations: [
    AppComponent,
    LablesComponent,
    LanguagesComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxResourceFactoryModule.forRoot(),
    NgbModule.forRoot(),
    FontAwesomeModule,
    PerfectScrollbarModule,
    NgSelectModule,
    FormsModule,
    Ng2HandySyntaxHighlighterModule,

    ServicesModule.forRoot(),
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
