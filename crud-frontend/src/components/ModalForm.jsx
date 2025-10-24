export default function ModalForm({isOpen, onClose, mode, OnSummit}) {
  return (
    <>
    <dialog id="my_modal_3" className="modal" open ={isOpen}>
      <div className="modal-box">
        <h3 className="font-bold text-lg py-4 ml-28">{mode === "edit" ? "Edit client": "Client details"}</h3>
        <form method="dialog" >

        <label className="input input-bordered my-4 flex items-center gap-2">
          Name:
          <input type="text" className="grow" placeholder=" " />
        </label>
         <label className="input input-bordered my-4 flex items-center gap-2 ">
          Email:
          <input type="text" className="grow" placeholder=" " />
        </label>
        <label className="input input-bordered my-4 flex items-center gap-2 ">
          Job:
          <input type="text" className="grow" placeholder=" " />
        </label>

        <div className="flex mb-4 justify-between">
          <label className="input input-bordered mr-8 my-4 flex items-center gap-2">
            Rate:
            <input type="number" className="grow" placeholder=" " />
          </label>
          <select className="select select-bordered w-full mt-4 mr-36" >
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>Close</button>

          <button className="btn btn-success ml-28"> {mode === "edit" ? "Save changes": "Add Client"}</button>
        </form>
      </div>
    </dialog>
    </>
    );
}
 