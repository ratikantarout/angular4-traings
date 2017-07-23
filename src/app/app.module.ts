import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HeroChildComponent } from './components/hero-child/hero-child.component';
import { HeroParentComponent } from './components/hero-parent/hero-parent.component';
import { NameChildComponent } from './components/name-child/name-child.component';
import { NameParentComponent } from './components/name-parent/name-parent.component';
import { VersionChildComponent } from './components/version-child/version-child.component';
import { VersionParentComponent } from './components/version-parent/version-parent.component';
import { VoterComponent } from './components/voter/voter.component';
import { VoteTakerComponent } from './components/voter-taker/voter-taker.component';
import { HeroJobAdComponent } from './components/dynamic-component-loader/hero-job-ad-component';
import { AdBannerComponent } from './components/dynamic-component-loader/ad-banner.component';
import { HeroProfileComponent } from './components/dynamic-component-loader/hero-profile.component';
import { AdDirective } from './components/dynamic-component-loader/ad.directive';
import { AdService } from './components/dynamic-component-loader/ad.service';
import { C1 } from './components/dynamic-tab/components/c1.component';
import { C2 } from './components/dynamic-tab/components/c2.component';
import { C3 } from './components/dynamic-tab/components/c3.component';
import { Tabs } from './components/dynamic-tab/components/my-tab/my-tabs.component';
import { DclWrapper } from './components/dynamic-tab/dcl-wrapper-component';
@NgModule({
  declarations: [
    AppComponent,
    HeroChildComponent,
    HeroParentComponent,
    NameChildComponent,
    NameParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterComponent,
    VoteTakerComponent,
    HeroJobAdComponent,
    AdBannerComponent,
    HeroProfileComponent,
    AdDirective,
    C1, C2, C3, DclWrapper, Tabs
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  entryComponents: [HeroJobAdComponent, HeroProfileComponent, C1, C2, C3],
  providers: [AdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
