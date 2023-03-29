import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */

@NgModule({
  imports: [
    /* jhipster-needle-add-admin-module - JHipster will add admin modules here */
    RouterModule.forChild([
      {
        path: 'speech-data',
        loadChildren: () => import('./speech-data/speech-data.module').then(m => m.SpeechDataModule),
        data: {
          pageTitle: 'userSpeechData.home.title',
        }
      },
      {
        path: 'devices',
        loadChildren: () => import('./device/device.module').then(m => m.DeviceModule),
        data: {
          pageTitle: 'userDevice.home.title',
        }
      }
      /* jhipster-needle-add-admin-route - JHipster will add admin routes here */
    ]),
  ],
})
export class UserRoutingModule {}
