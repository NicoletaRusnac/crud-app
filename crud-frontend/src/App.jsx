import { useState } from 'react'
import './App.css'
import NavigationBar from './components/NavigationBar'
import TableList from './components/TableList.JSX'
import ModalForm from './components/ModalForm'

// Main Application Component
function App() {
// State to manage modal visibility and mode
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add"); // "Add" or "Edit"

// Function to handle opening the modal
  const handleOpen = (mode) => {
    setIsOpen(true);
    setModalMode(mode);
  }
  // Function to handle form submission
  const handleSummit = () => {
    if (modalMode === "add") {
      console.log("Adding new entry");
    } else (modalMode === "edit"); {
      console.log("Editing existing entry");
    }
  }
// Render the main application UI
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
