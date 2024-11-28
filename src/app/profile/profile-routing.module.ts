import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileinfoComponent } from './profileinfo/profileinfo.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { NoAdressComponent } from './no-adress/no-adress.component';
import { NoAdressEditComponent } from './no-adress-edit/no-adress-edit.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { NotificationComponent } from './notification/notification.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SessionsComponent } from './sessions/sessions.component';
import { ProfileComponent } from './profile.component';
import { AdressComponent } from './adress/adress.component';
import { AuthSessionsProfileComponent } from './auth-sessions-profile/auth-sessions-profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,  
    children: [
      {
        path: 'dados',
        component: ProfileinfoComponent, 
      },
      {
        path: 'dados/editar',
        component: EditprofileComponent,  
      },
      {
        path: 'enderecos',
        component: AdressComponent,
        children: [
          {
            path: '',
            component: NoAdressComponent,
          },
          {
            path: 'adicionar',
            component: NoAdressEditComponent,
          },
        ],
      },
      {
        path: 'favoritos',
        component: FavoritesComponent,  
      },
      {
        path: 'notificacoes',
        component: NotificationComponent,  
      },
      {
        path: 'authsessions',
        component: AuthSessionsProfileComponent,
        children: [
          {
            path: 'autenticacao',
            component: AuthenticationComponent,
          },
          {
            path: 'sessões',
            component: SessionsComponent 
          },
        ],
      },
      {
        path: '',
        redirectTo: 'dados',
        pathMatch: 'full',
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
