import './Modal.css'
//import CloseIcon from '@mui/icons-material/Close';

const Modal = ({title, children}) => {
    return(
        <div className="modal-custom">
            <h2>{title}</h2>
            {children}

        </div>
    )
}

export default Modal