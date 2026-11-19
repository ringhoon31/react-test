
import './App.css'
import Aside from './components/Aside'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  return (
      <main className='container'>
        <Header />
        <div className="content">
          <Aside />
          <Main />
        </div>
        <Footer />
      </main>
  )
}

export default App
