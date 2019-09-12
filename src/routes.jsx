import React from 'react';
import { Route } from "react-router-dom";

import Home from './routes/home';
import Content from './routes/content';
import Features from './routes/features';
import Pricing from './routes/pricing';
import WhyAirShip from './routes/why-airship';
import GetInTouch from './routes/get-in-touch';

const Routes = () => (
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/features" component={Features} />
        <Route path="/content" component={Content} />
        <Route path="/why-airship" component={WhyAirShip} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/get-in-touch" component={GetInTouch} />
    </div>
);

export default Routes;
