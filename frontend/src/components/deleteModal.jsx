function DeleteModal({ onCancel, onConfirm }) {
    return (
        <div
            className="modal fade show"
            style={{
                display: "block",
                backgroundColor: "rgba(0,0,0,0.5)"
            }}
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title">
                            Delete Expense
                        </h5>

                        <button
                            className="btn-close"
                            onClick={onCancel}
                        ></button>
                    </div>

                    <div className="modal-body">
                        Are you sure you want to delete this expense?
                    </div>

                    <div className="modal-footer">
                        <button
                            className="btn btn-secondary"
                            onClick={onCancel}
                        >
                            Cancel
                        </button>

                        <button
                            className="btn btn-danger"
                            onClick={onConfirm}
                        >
                            Delete
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default DeleteModal;