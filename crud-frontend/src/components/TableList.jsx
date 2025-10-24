export default function TableList({onOpen}) {
const  people=[
        {id: 1, name: "Nicoleta Rusnac", email: "nicoletarusnac@gmail.com", job: "Junior Developer", rate : "100", isActive: true},
        {id: 2, name: "Nicoleta Rusnac1", email: "nicoletarusnac1@gmail.com", job: "Junior Developer1", rate : "101", isActive: true},
        {id: 3,name: "Nicoleta Rusnac2", email: "nicoletarusnac2@gmail.com", job: "Junior Developer2", rate : "102", isActive: false}
        
    ];
  return (
   <>

        <div className="overflow-x-auto mt-10 ">
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Job</th>
                <th>Rate</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody className="hover">
            {/* row 1 */}

            {people.map((person) => (
                <tr>
                    <th>{person.id}</th>
                    <td>{person.name}</td>
                    <td>{person.email}</td>
                    <td>{person.job}</td>
                    <td>{person.rate}</td> 
                    <td> 
                        <button className={`btn  rounded-full w-20 ${person.isActive ? `btn-primary`: `btn-outline btn-primary`}`}>
                            {person.isActive ? 'Active' : 'Inactive'}
                        </button>
                    </td>
                    <td>   
                        <button onClick={() => onOpen("edit")} className="btn btn-secondary w-20">Update</button>
                    </td>
                    <td>
                         <button className="btn btn-error w-20">Delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
   </>
  );
}