import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/pages/home.component';
import { BlogComponent } from './components/pages/blog.component';
import { JambComponent } from './components/test/jamb.component';
import { WaecComponent } from './components/test/waec.component';
import { PostComponent } from './components/test/post.component';
import { NecoComponent } from './components/test/neco.component';
import { MockComponent } from './components/test/mock.component';
import { JssceComponent } from './components/test/jssce.component';
import { NursingComponent } from './components/test/nursing.component';
import { LeafComponent } from './components/test/leaf.component';
import { CommonComponent } from './components/test/common.component';
import { AptitudeComponent } from './components/test/aptitude.component';
import { FaqComponent } from './components/about/faq.component';
import { UsComponent } from './components/about/us.component';
import { DesktopComponent } from './components/pages/desktop.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/login/logout.component';
import { ResetpasswordComponent } from './components/login/resetpassword.component';
import { InstructionComponent } from './components/test/instruction.component';
import { TestComponent } from './components/test/test.component'

const appRoutes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'request-password-reset',
        component: ResetpasswordComponent
    },
    {
        path:'blog',
        component: BlogComponent
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'instruction',
        component: InstructionComponent
    },
    {
        path:'logout',
        component: LogoutComponent
    },
    {
        path:'jamb',
        component: JambComponent
    },
    {
        path:'waec',
        component: WaecComponent
    },
     {
        path:'post',
        component: PostComponent
    },
    {
        path:'neco',
        component: NecoComponent
    },
    {
        path:'mock',
        component: MockComponent
    },
    {
        path:'jssce',
        component: JssceComponent
    },
    {
        path:'nursing',
        component: NursingComponent
    },
    {
        path:'jambmock',
        component: LeafComponent
    },
    {
        path:'common',
        component: CommonComponent
    },
    {
        path:'aptitude',
        component: AptitudeComponent
    },
    {
        path:'faq',
        component: FaqComponent
    },
    {
        path:'desktop',
        component: DesktopComponent
    },
    {
        path:'about',
        component: UsComponent
    },
    {
        path:'test',
        component: TestComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
