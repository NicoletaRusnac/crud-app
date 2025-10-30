export default function NavigationBar({onOpen}) { // onOpen is a function prop to open the modal
  return (
    <>
<div className="navbar bg-base-100 shadow-sm">
  <div>
    <a className="btn btn-ghost text-xl">Clients</a>
  </div>
  <div className="flex-1 flex justify-center px-4 mx-2">
    <input type="text" placeholder="Search" className="input input-bordered w-122" />
  </div>  
  <div className="flex gap-2">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="My profile photo"
            src="/avatarPhoto.jpg" />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li> 
          <a className="btn btn-secondary">
            Profile
          </a>
        </li>
        <li><a className="btn btn-secondary" onClick={onOpen}>Add Client</a></li>
        <li><a className="btn btn-secondary">Logout</a></li>
        
      </ul>
    </div>
  </div>
</div>
    </>
    );
}