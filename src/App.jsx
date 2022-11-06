import './App.css'
import Search from './components/Search.jsx'
import Movies from './components/Movies.jsx'
import {useGlobalContext} from './Context'
import Modal from './components/Modal.jsx'
export default function App() {

  const { showModal } = useGlobalContext()
  return (
    <main>
      <Search />
      <Movies />
      {showModal && <Modal />}
    </main>
  )
}
