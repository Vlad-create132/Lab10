import './App.css'
import { Header } from './header.tsx';
import { Contact } from './contact.tsx';
import {Baner} from './baner.tsx';
import { ServiceList } from './servicelist.tsx';



function App() {
  

  return (
    <>
     <Header />
     <Baner />
     <ServiceList />
     <Contact />
     
    </>
  )
}

export default App
