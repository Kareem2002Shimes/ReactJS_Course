import ReactDom from "react-dom";
function Modal() {
  return ReactDom.createPortal(
    <div>
      <h1>Hello Modal</h1>
    </div>,
    document.getElementById("modal-root")
  );
}

export default Modal;
