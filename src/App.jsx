import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'

import { Link, Route } from 'wouter'
import reactLogo from './assets/react.svg'

function App() {
  return (
    <div className="bg-gray-800 grid h-full">
      <section className='text-white grid place-content-center p-4'>
        <div className='flex justify-center'>
          <Link to='/'>
            <img className='animate-bounce' src={reactLogo} alt="react-logo" />
          </Link>
        </div>
        <Route component={Home} path='/' />
        <Route component={SearchResults} path='/search/:keyword' />
        <Route component={Detail} path='/gif/:id' />
      </section>
    </div>
  );
}

export default App;
