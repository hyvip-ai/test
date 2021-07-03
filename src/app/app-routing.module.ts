import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from "./modules/common/signUp/signUp.component";
import { UsersComponent } from './modules/users/users.component';
import { TraderComponent } from './modules/trader/trader.component';
import { TraderscandataComponent } from './modules/trader/traderscandata/traderscandata.component';
import { BrokersComponent } from './modules/brokers/brokers.component';
import { BrokerscandataComponent } from './modules/brokers/brokerscandata/brokerscandata.component';

const routes: Routes = [
{
  path:'',
  pathMatch:'full',
  redirectTo:'home'
},
 {
    path: 'signUp',
    component: SignUpComponent,
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (DashBoardModule) => DashBoardModule.DashBoardModule
      ),
  },
  {
    path: 'regional-data',
    loadChildren: () =>
      import('./modules/regional-data/regional-data.module').then(
        (RegionalDataModule) => RegionalDataModule.RegionalDataModule
      ),
  },
  {
    path: 'machine',
    loadChildren: () =>
      import('./modules/machine/machine.module').then(
        (machineModule) => machineModule.MachineModule
      ),
  },
  {
    path: 'crop',
    loadChildren: () =>
      import('./modules/crop/crop.module').then(
        (cropModule) => cropModule.CropModule
      ),
  },
  {
    path:'Farmers',
    loadChildren:()=>
    import('./modules/farmer/farmer.module').then(
      (farmerModule)=>farmerModule.FarmerModule
    )
  },
 
  {
    path: 'users',
    component:UsersComponent
  },
    {
    path:'Traders',
    component:TraderComponent
   
  },
   
    {
    path:'Brokers',
    component:BrokersComponent
   
  },
   
      
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
