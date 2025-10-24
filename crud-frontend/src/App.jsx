import { useState } from 'react'
import './App.css'
import NavigationBar from './components/NavigationBar'
import TableList from './components/TableList.JSX'
import ModalForm from './components/ModalForm'


function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add"); // "Add" or "Edit"

  const handleOpen = (mode) => {
    setIsOpen(true);
    setModalMode(mode);
  }
  const handleSummit = () => {
    if (modalMode === "add") {
      console.log("Adding new entry");
    } else (modalMode === "edit"); {
      console.log("Editing existing entry");
    }
  }

  return (
    <>
     <NavigationBar onOpen = {()=> handleOpen ("add")} />
     <TableList onOpen={handleOpen} />
     < ModalForm isOpen={isOpen} OnSummit ={handleSummit} 
     onClose ={() => setIsOpen(false)} mode ={modalMode} />

    </>
  )
}

export default App
