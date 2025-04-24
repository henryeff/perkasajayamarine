function Modal({ openModal, children }) {
  if (!openModal) return null;
  return <>{children}</>;
}

export default Modal;
