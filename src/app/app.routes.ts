import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

import { FootballPageComponent } from './hobby-practice/football/football-page/football-page.component';
import { GoogleMapsModule } from '@angular/google-maps'; 

import { CategoryComponent } from './homepage/category/category.component';
import { CategoryDescriptionComponent } from './homepage/category/category-description/category-description.component';

import { QuizComponent } from './homepage/quiz/quiz.component';
import { QuizdashComponent } from './quiz-game/quizdash/quizdash.component';
import { QuizinstructionsComponent } from './quiz-game/quizinstructions/quizinstructions.component'; 
import { QuizquestionComponent } from './quiz-game/quizquestion/quizquestion.component';
import { QuizresultComponent } from './quiz-game/quizresult/quizresult.component';


import { PracticeyourhobbyComponent } from './hobby-practice/hobby-components/practiceyourhobby/practiceyourhobby.component';
import { OriginComponent } from './hobby-practice/hobby-components/origin/origin.component'; 
import { FundamentalsComponent } from './hobby-practice/hobby-components/fundamentals/fundamentals.component'; 
import { BenefitsComponent } from './hobby-practice/hobby-components/benefits/benefits.component';
import { MaterialsComponent } from './hobby-practice/hobby-components/materials/materials.component'; 
import { TipsComponent } from './hobby-practice/hobby-components/tips/tips.component';  
import { EventsComponent } from './hobby-practice/hobby-components/events/events.component';


import { EditprofileComponent } from './profile/editprofile/editprofile.component';



import { SchoolDescriptionComponent } from './hobby-practice/hobby-components/school-description/school-description.component';
import { ResultComponent } from './hobby-practice/hobby-components/result/result.component';
import { RatingsComponent } from './hobby-practice/hobby-components/ratings/ratings.component';

import { FormsComponent } from './theforms/forms/forms.component';
import { FormsSchoolComponent } from './theforms/forms-school/forms-school.component';
import { FormsSubscriptionComponent } from './theforms/forms-subscription/forms-subscription.component';
import { ContactNavComponent } from './shared/contact-nav/contact-nav.component';



export const routes: Routes = [
  
  // home
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule) },
  { path: 'contate', component: ContactNavComponent },

  // auth
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'forms_company', component: FormsComponent},
  { path: 'forms_school', component: FormsSchoolComponent},
  { path: 'forms_student', component: FormsSubscriptionComponent},


  // profile

  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) }, 
  { path: 'editprofile', component: EditprofileComponent },

  // company
  { path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) },

  // football
 
  { path: 'football', component: FootballPageComponent},

  // category
 
  { path: 'category', component: CategoryComponent },
  { path: 'category/:nome', component: CategoryDescriptionComponent },
 
 // quiz

  { path: 'quiz', component: QuizComponent },
  { path: 'quizdash', component: QuizdashComponent },
  { path: 'quizinstructions', component: QuizinstructionsComponent },
  { path: 'quizquestion', component: QuizquestionComponent  },
  { path: 'quizresult', component: QuizresultComponent},

  // hobby-practice

  { path: 'practiceyourhobby', component: PracticeyourhobbyComponent },
  { path: 'origin', component: OriginComponent },
  { path: 'fundamentals', component: FundamentalsComponent },
  { path: 'benefits', component: BenefitsComponent},
  { path: 'materials', component: MaterialsComponent },
  { path: 'tips', component: TipsComponent},
  { path: 'events', component: EventsComponent},

// practice your hobby

{ path: 'school', component: SchoolDescriptionComponent},
{ path: 'result', component: ResultComponent},
{ path: 'ratings', component: RatingsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes), GoogleMapsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
