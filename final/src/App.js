import React from 'react';
import Home from './components/Home/Home';
import Test from './components/Test/Test';
import Signup from './components/Signup/Signup';
import Search from './components/Search/Search';
import Results from './components/Results/Results';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';
import Hobbies from './components/Hobbies/Hobbies';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  
  const App = () => {


    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/test" exact component={Test} />
                    <Route path="/signup" exact component={Signup} />
                    <Route path="/search" exact component={Search} />
                    <Route path="/results" exact component={Results} />
                    <Route path="/personalinfo" exact component={PersonalInfo} />
                    <Route path="/Hobbies" exact component={Hobbies} />
                </Switch>
            </Router>
        </React.Fragment>
    );
};

export default App;
//   export default function App() {
//     return (
//       <Router>
//         <div>
//           <nav>
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/about">About</Link>
//               </li>
//               <li>
//                 <Link to="/users">Users</Link>
//               </li>
//             </ul>
//           </nav>
  
//           {/* A <Switch> looks through its children <Route>s and
//               renders the first one that matches the current URL. */}
//           <Switch>
//             <Route path="/about">
//               <About />
//             </Route>
//             <Route path="/users">
//               <Users />
//             </Route>
//             <Route path="/">
//               <Home />
//             </Route>
//           </Switch>
//         </div>
//       </Router>
//     );
//   }
