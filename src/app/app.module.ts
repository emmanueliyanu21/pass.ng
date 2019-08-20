import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent} from './components/navbar/navbar.component';
import { IconbarComponent} from './components/iconbar/iconbar.component';
import { FooterComponent} from './components/footer/footer.component';
import { HomeComponent} from './components/pages/home.component';
import { BlogComponent} from './components/pages/blog.component';
import { JambComponent} from './components/test/jamb.component';
import { WaecComponent} from './components/test/waec.component';
import { PostComponent} from './components/test/post.component';
import { NecoComponent} from './components/test/neco.component';
import { MockComponent} from './components/test/mock.component';
import { JssceComponent} from './components/test/jssce.component';
import { NursingComponent} from './components/test/nursing.component';
import { LeafComponent} from './components/test/leaf.component';
import { CommonComponent} from './components/test/common.component';
import { AptitudeComponent} from './components/test/aptitude.component';
import { FaqComponent} from './components/about/faq.component';
import { UsComponent} from './components/about/us.component';
import { DesktopComponent } from './components/pages/desktop.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/login/logout.component'; 
import { ResetpasswordComponent } from './components/login/resetpassword.component';
import { TestComponent } from './components/test/test.component';

import { routing } from './app.routing';
import { InstructionComponent } from './components/test/instruction.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DesktopComponent,
    IconbarComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    JambComponent,
    WaecComponent,
    PostComponent,
    NecoComponent,
    MockComponent,
    JssceComponent,
    NursingComponent,
    LeafComponent,
    CommonComponent,
    AptitudeComponent,
    FaqComponent,
    UsComponent,
    LoginComponent,
    ResetpasswordComponent,
    LogoutComponent,
    InstructionComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
