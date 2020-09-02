import React, {useEffect, lazy, Suspense} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import './App.css';
import { GlobalStyle } from './global.styles';
// import HomePage from './pages/homepage/homepage.component';
// import ShopPage from './pages/shop/shop.component';
// import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
// import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.components';
import Spinner from './components/spinner/spinner.componnt';
// import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';
import ErrorBoundary from './components/error-boundary/error-boundary.compents';

const HomePage = lazy(() => import( './pages/homepage/homepage.component') );
const ShopPage = lazy(() => import( './pages/shop/shop.component') );
const SignInAndSignUpPage = lazy(() => import( './pages/sign-in-and-sign-up/sign-in-and-sign-up.component') );
const CheckoutPage = lazy(() => import( './pages/checkout/checkout.component') );

const App= ({checkUserSession, currentUser})=> {
useEffect(() =>{
  checkUserSession()
}, [checkUserSession]);


return (
      <div>
      <GlobalStyle />
      <Header />
      <Switch>
      <ErrorBoundary>
      <Suspense fallback={<Spinner/>}>
      <Route exact path='/' component={HomePage} />

      <Route  path='/shop' component={ShopPage} />
      <Route  exact path='/checkout' component={CheckoutPage} />
      <Route exact  path='/signin' render={ ()=> 
        currentUser ? (
          <Redirect to='/' />
          ) : (
            <SignInAndSignUpPage />
            )
       }
            />
            </Suspense>
            </ErrorBoundary>
      </Switch>
      </div>);
      }
        
  

  const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
  })

const mapDispatchToProps = dispatch =>({
  // setCurrentUser: user => dispatch(setCurrentUser(user))
  checkUserSession: ()=> dispatch(checkUserSession())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
  ) (App);
