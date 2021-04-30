import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


import { lazy, Suspense} from 'react';




const MainlyPage = lazy(() => import('./pages/MainlyPage'))
const SinglePage = lazy(() => import('./pages/SinglePage'))
const RegisterPage = lazy(() => import('./pages/RegisterPage'))
const ChatPage = lazy(() => import('./pages/ChatPage'))
const InfoPage = lazy(() => import('./pages/InfoPage'))
const SettingsPage = lazy(() => import('./pages/SettingsPage'))




function App() {
  return (
        <div className="App">
            <Router>

    <Suspense fallback={<h1>Loading...</h1>}>

      <div className="app">

      </div>




    <Switch>
    <Route exact  path="/"    component={MainlyPage} />
      <Route  path="/register"    component={RegisterPage} />
       <Route  path="/singlePage"    component={SinglePage} />  
        <Route  path="/infoPage"    component={InfoPage} />  
        <Route  path="/chatPage"    component={ChatPage} />  
        <Route  path="/settingsPage"    component={SettingsPage} />  


       
        

    </Switch>

      


    </Suspense>


    </Router>
        </div>
  );
}

export default App;
