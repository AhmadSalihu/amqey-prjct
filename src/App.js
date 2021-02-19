import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import Footer from './components/footercomponent/Footer';
import Header from './components/Headercomponent/Header';
import SHOP from './components/ShopComponent/Shop';
import HomePage from './Pages/homepage.compponent/homepage';
import { auth, createUserProfileDocument } from './Firebase/firebase.utils';
import HomeScreen from './HomeScreen'
import { setCurrentUser } from './redux-store/user/user.actions';
import SignInAndSignOutPage from './Pages/sign-in-sign-up';

 

class App extends React.Component {
  
  // onSearchChange = (event) => {
  //   this.setState({ searchfield: event.target.value });
  //   console.log(event.target.value)
  // };
  
  unsubscribeFromAuth = null
  
  componentDidMount() {
    const {setCurrentUser} = this.props;
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);


      userRef.onSnapshot(snapShot => {
        setCurrentUser({
         id: snapShot.id,
         ...snapShot.data()
       }); 
      });
    }
    setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }




  render() { 
    // const { data, searchField } = this.state;
    // const filteredData = data.filter((data, i) => {
    //  return  data.name.toLowerCase().includes(searchField.toLowerCase())
    // });

    return (
      <div> 
        <Header /> 
        <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/"  component={HomeScreen} />
        <Route  path="/Shop" component={SHOP} />
        <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect />
        ) : (
         <SignInAndSignOutPage />) } />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const  mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
 

export default connect(mapStateToProps, mapDispatchToProps)(App);
