import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from "./modules/common/signUp/signUp.component";
import { UsersComponent } from './modules/users/users.component';
const routes: Routes = [
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
    path: 'signUp',
    component: SignUpComponent,
  },
  {
    path: 'users',
    component:UsersComponent
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
