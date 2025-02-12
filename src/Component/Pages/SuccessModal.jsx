import heart from '../Static/heart.png'
const SuccessModal = ({ onClose }) => {
  const handleClose = () => {
    onClose();

    const formModal = document.getElementById('exampleModal');
    if (formModal) {
      const modalInstance = window.bootstrap.Modal.getInstance(formModal);
      if (modalInstance) {
        modalInstance.hide();
      }
    }
  };

  return (
    <div className="modal success fade show d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header mx-auto">
            <h5 className="modal-title text-center"><img src={heart} alt='heart' height={70} width={70} /></h5>
          </div>
          <div className="modal-body text-center">
            <h4>Thank you for connecting with us.</h4>
            <h4>Our team will contact you soon.</h4>
            <button type="button" className="btn btn-primary" onClick={handleClose}>
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SuccessModal;