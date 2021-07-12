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
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import {DataService} from './services/data.service'
import { UsersComponent } from './modules/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { TraderComponent } from './modules/trader/trader.component';
import { TraderscandataComponent } from './modules/trader/traderscandata/traderscandata.component';
import { BrokersComponent } from './modules/brokers/brokers.component';
import { BrokerscandataComponent } from './modules/brokers/brokerscandata/brokerscandata.component'

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    SignUpComponent,
    UsersComponent,
    TraderscandataComponent,
    BrokersComponent,
    BrokerscandataComponent,
    TraderComponent
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
    AngularFirestoreModule,
      HttpClientModule,
    
    AngularFireModule.initializeApp(environment.firebase)

  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
