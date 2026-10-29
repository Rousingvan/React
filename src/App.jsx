import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import NoMatch from './component/NoMatch';
import Posts from './component/Posts';
import ListPost from './component/Listpost';
import Popular from './component/Popular';
import Post from './component/Post';
import Country from './component/Country';
import CountryList from './component/CountryList';
import CountryDetail from './component/CountryDetail';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/" style={{ padding: 8 }}>Home</Link>
        <Link to="/about" style={{ padding: 8 }}>About</Link>
        <Link to="/posts" style={{ padding: 8 }}>Posts</Link>
        <Link to="/country" style={{ padding: 8 }}>Country</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/posts' element={<Posts />}>
          <Route index element={<ListPost />} />
          <Route path="popular" element={<Popular />} />
          <Route path=':slug' element={<Post />} />
        </Route>
        <Route path='/country' element={<Country />}>
          <Route index element={<CountryList />} />
          {/* <Route path=':name' element={<CountryDetail />} /> */}
          {/* <Route path=':name' element={<CoutryDetail />} /> */}
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
