import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// Pages
import { IndexPage } from './pages/index/index.component';

// Components
import { AccordionComponent } from './components/accordion/accordion.component';
import { CollapseComponent } from './components/collapse/collapse.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ScrollSpyComponent } from './components/scroll-spy/scroll-spy.component';
import { MegamenuComponent } from './components/megamenu/megamenu.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ModalComponent } from './components/modal/modal.component';
import { OffcanvasComponent } from './components/offcanvas/offcanvas.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PopoverComponent } from './components/popover/popover.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { RemoveElementComponent } from './components/remove-element/remove-element.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: IndexPage,
      },
    ]),
  ],
  declarations: [
    AppComponent,
    IndexPage,
    AccordionComponent,
    CollapseComponent,
    DropdownComponent,
    MegamenuComponent,
    ModalComponent,
    OffcanvasComponent,
    PopoverComponent,
    RemoveElementComponent,
    ScrollSpyComponent,
    SidebarComponent,
    TabsComponent,
    TooltipComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
