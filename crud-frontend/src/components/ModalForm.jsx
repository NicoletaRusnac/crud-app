import { useState } from 'react' // React import

// Modal form component for adding/editing client details
export default function ModalForm({isOpen, onClose, mode, OnSummit}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [status, setStatus] = useState(false);
  const [rate, setRate] = useState("");

  // Handle status change between Active and Inactive
  const handeStatusChange = (e) => {
    setStatus(e.target.value === "Active" );
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onclose(e);
  }
// Render the modal form
  return (
    <>
    <dialog id="my_modal_3" className="modal" open ={isOpen}>
      <div className="modal-box modal-middle w-1/3">
        <h3 className="font-bold text-lg ">{mode === "edit" ? "Edit client": "Client details"}</h3>
        <form method="dialog flex justify-center align-center" onSummit={handleSubmit}> 

        <label className="input input-bordered my-4 flex justify-center  gap-2">
          Name:
          <input type="text" className="grow" value={name} onChange = {(e) => setName(e.target.value)} />
        </label>
         <label className="input input-bordered my-4 flex items-center gap-2 ">
          Email:
          <input type="text" className="grow" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className="input input-bordered my-4 flex items-center gap-2 ">
          Job:
          <input type="text" className="grow" value={job} onChange={(e) => setJob(e.target.value)} />
        </label>

        <div className="flex mb-4 justify-between">
          <label className="input input-bordered mr-8 my-4 flex items-center gap-8">
            Rate:
            <input type="number" className="grow" value={rate} onChange={(e) => setRate(e.target.value)} />
          </label>
          <select value={status ? "Active" : "Inactive"} className="select select-bordered w-full mt-4 mr-12" onChange={handeStatusChange} >
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

          <button className="btn py-2 btn-ghost absolute right-2 top-2" onClick={onClose}>Close</button>

          <button className="btn btn-success ml-28 px-2"> {mode === "edit" ? "Save changes": "Add Client"}</button>
        </form>
      </div>
    </dialog>
    </>
    );
}
 