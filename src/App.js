import './bootstrap.min.css'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ShowScreen from './screens/ShowScreen'
import AddScreen from './screens/AddScreen'
import DetailScreen from './screens/DetailScreen'
import {Container} from 'react-bootstrap'



function App() {
  return (
    <BrowserRouter>
      <Container>
        <main>
        <Routes>
          <Route path="" element={<ShowScreen />}/>
          <Route path = '/show' element = {<ShowScreen />} />
          <Route path = '/add' element = {<AddScreen />} />
          <Route path = '/pic/:id' element = {<DetailScreen/>} />
        </Routes>
        </main>
      </Container>
    </BrowserRouter>
  );
}

export default App;
