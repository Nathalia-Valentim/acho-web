import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyNoProfileComponent } from './company-no-profile/company-no-profile.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { CompanyNotificationComponent } from './company-notification/company-notification.component';
import { AuthSessionsCompanyComponent } from './auth-sessions-company/auth-sessions-company.component';
import { CompanyAuthenticationComponent } from './company-authentication/company-authentication.component';
import { CompanySessionsComponent } from './company-sessions/company-sessions.component';
import { CompanySubscriptionComponent } from './company-subscription/company-subscription.component';
import { CompanyComponent } from './company.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
    children: [
      { path: 'perfil', component: CompanyProfileComponent },
      { path: 'inscricoes', component: CompanySubscriptionComponent },
      { path: 'notificacoes', component: CompanyNotificationComponent },
      {
        path: 'authsessions',
        component: AuthSessionsCompanyComponent,
        children: [
          { path: 'autenticacao', component: CompanyAuthenticationComponent },
          { path: 'sessoes', component: CompanySessionsComponent }, 
        ],
      },
      { path: '', redirectTo: 'perfil', pathMatch: 'full' },
    ], 
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
