import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardModule } from "./modules/dashboard/dashboard.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppHeaderComponent } from "./modules/common/appheader/appheader.component";
import {MatBadgeModule} from '@angular/material/badge';
import { AppSidebarComponent } from "./modules/common/appsidebar/appsidebar.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegionalDataModule } from "./modules/regional-data/regional-data.module";
import { MachineModule } from "./modules/machine/machine.module";
import { DoughNutChartModule } from './modules/common/doughnut-chart/doughnut-chart.module';
import { CropModule } from './modules/crop/crop.module';
import { ComponentHeaderModule } from "./modules/common/component-header/component-header.module";
import { FarmerModule } from "./modules/farmer/farmer.module";
import { SignUpComponent } from "./modules/common/signUp/signUp.component";

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    DashBoardModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatSidenavModule,
    ReactiveFormsModule,
    FormsModule,
    RegionalDataModule,
    MachineModule,
    DoughNutChartModule,
    CropModule,
    ComponentHeaderModule,
    FarmerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
