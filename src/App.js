// import logo from './logo.svg';
import { Provider } from 'react-redux';
import './App.css';
import Navigation from './Component/Navigation/Navigation';
import store from './Store/Store';


function App() {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}

export default App;
// src/App.js
// import React from "react";
// import { Provider } from 'react-redux';
// import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
// import Head from "./Component/Head";
// import store from "./Store/Store";
// import Item from "./Component/Item";
// import Search from "./Component/Search";
// import NotFound from "./Component/NotFound";

// const App = () => {
//   const handleSubmit = (e, history, searchInput) => {
//     e.preventDefault();
//     e.currentTarget.reset();
//     let url = `/search/${searchInput}`;
//     history.push(url);
//   };

//   return (
//     <Provider store={store
//     }>
//       <HashRouter basename="/SnapScout">
//         <div className="container">
//           <Route
//             render={props => (
//               <Head
//                 handleSubmit={handleSubmit}
//                 history={props.history}
//               />
//             )}
//           />
//           <Routes>
//             <Route
//               exact
//               path="/"
//               render={() => <Navigate to="/mountain" />}
//             />
//             <Route
//               path="/mountain"
//               render={() => <Item searchTerm="mountain" />}
//             />
//             <Route path="/beach" render={() => <Item searchTerm="beach" />} />
//             <Route path="/bird" render={() => <Item searchTerm="bird" />} />
//             <Route path="/food" render={() => <Item searchTerm="food" />} />
//             <Route
//               path="/search/:searchInput"
//               render={props => (
//                 <Search searchTerm={props.match.params.searchInput} />
//               )}
//             />
//             <Route component={NotFound} />
//           </Routes>
//         </div>
//       </HashRouter>
//     </Provider>
//   );
// };

// export default App;
