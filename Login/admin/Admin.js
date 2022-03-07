import React,{useState} from 'react';
import './admin.css';
import Modal from '../model/Modal';

function Admin(props) {
    
    const [modalOpen, setModalOpen] = useState(false);

        return (
            <div className="Addmin">
            <button
              className="openModalBtn"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              Login
            </button>
      
            {modalOpen && <Modal setOpenModal={setModalOpen} />}
          </div>
        );
 
    
}

export default Admin;