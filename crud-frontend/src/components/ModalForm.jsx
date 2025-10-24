export default function ModalForm({isOpen, onClose, mode, OnSummit}) {
  return (
    <>
    <dialog id="my_modal_3" className="modal" open ={isOpen}>
      <div className="modal-box">
        <h3 className="font-bold text-lg py-4">{mode === "edit" ? "Edit client": "Client details"}</h3>
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>Close</button>

          <button className="btn btn-success"> {mode === "edit" ? "Save changes": "Add Client"}</button>
        </form>
      </div>
    </dialog>
    </>
    );
}
 