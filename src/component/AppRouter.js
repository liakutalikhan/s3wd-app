import React from 'react';
import { Route, Switch, withRouter} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Error from './pages/Error';
import './AppRouter.css';

const AppRouter = ({location}) => {
    return (
        <>
            <TransitionGroup>
                <CSSTransition
                key={location.key}
                timeout={300}
                classNames="fade"
                >
                    <Switch location={location}>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/services" component={Services}/>
                        <Route exact path="/contact" component={Contact}/>
                        <Route component={Error}/>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </>
    );
};

export default withRouter(AppRouter);