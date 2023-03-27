
import Home from './pages/home';

import { Route, Switch } from 'react-router-dom'
import Personagens from './pages/personagens';
import { BrowserRouter } from 'react-router-dom'
import NeroPage from './pages/NeroPage';
import DantePage from './pages/DantePage';
import VergilPage from './pages/VergilPage';
import VPage from './pages/VPage';
import Armas from './pages/Armas';
const neroImage = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f3810965-d444-49fe-860e-ea51d4e13361/dcws2a3-4760284d-904d-4cea-ad2a-cdda3443474d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YzODEwOTY1LWQ0NDQtNDlmZS04NjBlLWVhNTFkNGUxMzM2MVwvZGN3czJhMy00NzYwMjg0ZC05MDRkLTRjZWEtYWQyYS1jZGRhMzQ0MzQ3NGQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NRxPCc4bmDhdzNIzdYCz1GPlT4-Vlkc5zm0mC67GGTE"


function App() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ Home } />
        <Route  exact path="/personagens" component={ Personagens } />
        <Route exact path='/personagens/nero' component={NeroPage} />
        <Route exact path='/personagens/dante' component={ DantePage }/>
        <Route exact path='/personagens/vergil' component={VergilPage}/>
        <Route exact path='/personagens/v' component={VPage} />
        <Route exact path='/armas' component={Armas}/>
      </BrowserRouter>
    );
  }

  export default App;