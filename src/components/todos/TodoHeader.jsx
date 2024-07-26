import React, { useState } from 'react'
import { createPortal } from 'react-dom';
import Modal from '../ui/Modal.jsx';
import TodoForm from './TodoForm.jsx';

function TodoHeader({onAdd}) {

    const [open, openModal] = useState(false);
    const closeModal = () => openModal(false);

  return (
    <div className="flex items-center justify-between mb-2" id="task-control">
        <button 
        className="px-6 py-2 font-semibold text-gray-100 bg-gray-800 border-none rounded cursor-pointer"
        onClick = {()=>openModal(true)}>
            Add 
        </button>

        {open && createPortal(
            <Modal  onClose = {closeModal}>
                <TodoForm onAdd = {onAdd} onClose = {closeModal}>
                newtodo
                </TodoForm>
                
            </Modal>, document.body
        )}

      
        
        
    </div>
  )
}

export default TodoHeader