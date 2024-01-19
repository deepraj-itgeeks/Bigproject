import React from "react";
import '../AnnouncementBar/AnnouncementBar.css' 
const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
 
    return (
        <div className="modalseconddiv1"
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
            <div className="modalseconddiv2"
                style={{
                    position:"absolute",
                    background: "white",
                    margin: "auto",
                    paddingLeft:"2%",
                    paddingRight:"2%",
                    padding: "1%",
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