import M from "materialize-css";
import { useRef } from "react";
import './toast.module.css';

const Toast = () => {
    debugger;
    const toastRef = useRef(null);

    const showToast = () => {
        const toastHTML = `<div class="toast"><span>This is a dismissible toast!</span></div>
            <button class="btn-flat toast-action">Ok</button>`;
        
        // Store toast instance to be able to dismiss it later
        toastRef.current = M.toast({ html: toastHTML, displayLength: Infinity, classes: "rounded" });

        // Add an event listener to the dismiss button
        document.querySelector('.toast-action').addEventListener('click', () => {
            toastRef.current.dismiss();
        });
    };

    const dismissToast = () => {
        if (toastRef.current) {
          toastRef.current.dismiss();
        }
      };

    return (
        <div>
            <button className="btn" onClick={showToast}>
                Show Toast
            </button>
            <button className="btn red" onClick={dismissToast} style={{ marginLeft: '10px' }}>
                Dismiss Toast
            </button>
        </div>
    );
}

export default Toast;
