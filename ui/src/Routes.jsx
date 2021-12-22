import { lazy , Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppWrapper } from './components/AppWrapper';
import { NavBar } from './components/NavBar';

import Preloader from './components/Preloader';

const Home = lazy(()=>import('./pages/Home'));
const NotFound = lazy(()=>import('./pages/NotFound'));

export const Routes = ()=>{
    return (
        <Suspense fallback={<Preloader/>}>
            <NavBar/>
            <AppWrapper>
                <Switch>
                    <Route path="/" component={Home} exact key="home"/>
                    <Route component={NotFound}  key="notfound"/>  
                </Switch>
            </AppWrapper>
        </Suspense>
    
    )
} 