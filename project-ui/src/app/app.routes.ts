import { Routes } from '@angular/router';
import { CvdTabComponent } from './cvd-tab/cvd-tab.component';
import { LrModelComponent } from './lr-model/lr-model.component';
import { ClassModelComponent } from './class-model/class-model.component';
import { ReferencesComponent } from './references/references.component';

export const routes: Routes = [
        { path: '', redirectTo: '/cvd', pathMatch: 'full' },
        { path: 'cvd', component: CvdTabComponent },
        { path: 'lr-model', component: LrModelComponent },
        { path: 'class-model', component: ClassModelComponent },
        { path: 'references', component: ReferencesComponent }
    ];
