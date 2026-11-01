import { Routes } from '@angular/router';
import { CorporateComponent } from './pages/corporate/corporate.component';

export const routes: Routes = [
  {
    path: '',
    component: CorporateComponent,
    title: 'ROSAT VİSİON TEKNOLOJİ A.Ş | Derin Teknoloji, İHA & Bilgisayarlı Görü'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
