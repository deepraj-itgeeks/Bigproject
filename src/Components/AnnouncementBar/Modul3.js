import React from "react";
import '../AnnouncementBar/Account.css' 
const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
 
    return (
        <div id="realmodaldiv1"
            onClick={onClose}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                zIndex:3,
            }}
        >
            <div id="realmodaldiv2"
                style={{
                    position:"absolute",
                    background: "white",
                    top:60,
                    margin: "auto",
                    boxShadow: "2px solid black",
                    zIndex:3,
                }}
            >
                {children}
            </div>
        </div>
    );
};
 
export default Modal;