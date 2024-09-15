import M from "materialize-css";
import { useEffect } from "react";

const Modal = () => {
    useEffect(() => {
        // Initialize Materialize Modal
        const modalElems = document.querySelectorAll('.modal');
        M.Modal.init(modalElems, {});
      }, []); // Only run once when component mounts
      
    return (
        <div>
        {/* Trigger Button for the Modal */}
        <button data-target="modal1" className="btn modal-trigger">
            Open Modal
        </button>

        {/* Modal Structure */}
        <div id="modal1" className="modal">
            <div className="modal-content">
            <h4>Modal Header</h4>
            <p>This is the modal content</p>
            </div>
            <div className="modal-footer">
            <button className="modal-close btn-flat">Close</button>
            </div>
        </div>
        </div>
    );
}

export default Modal;
