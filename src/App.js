import Header from './components/Header';
import './App.sass'
import Main from './components/Main/Main';
import PostScript from './components/PostScript/PostScript';
import Services from './components/Services/Services';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <PostScript />
      <Services />
    </div>
  );
}

export default App;
