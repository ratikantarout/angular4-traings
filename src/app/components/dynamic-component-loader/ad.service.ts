import { Injectable } from '@angular/core';

import { HeroJobAdComponent } from './hero-job-ad-component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdItem } from './ad.item';

@Injectable()
export class AdService {
  getAds() {
    return [
      // new AdItem(HeroProfileComponent, { name: 'Bombasto', bio: 'Brave as they come' }), 

      new AdItem(HeroProfileComponent, {
        name: 'Hero Profile Component 1',
        bio: 'Hero Profile component body'
      }),

      new AdItem(HeroJobAdComponent, {
        headline: 'Hiring for several positions',
        body: 'Submit your resume today!'
      }),

      new AdItem(HeroJobAdComponent, {
        headline: 'Hero Job Componet added',
        body: 'Hero component body'
      }

      ),
    ];
  }
}
