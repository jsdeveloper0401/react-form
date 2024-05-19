import { useState } from "react";
import "./App.css";

function App() {
    // const [count, setCount] = useState(0);
    // const [step, setStep] = useState(0);
    // const [counter, setCounter] = useState([]);
    // const [number, setNumber] = useState("");

    // const addCounter = (item) => {
    //     // counter.push(item);
    //     // setCounter([...counter]);
    //     console.log(number);
    // };

    //    const addCounter = () => {
    //        if (number !== "") {
    //            setCounter([...counter, +number]);
    //            setNumber("");
    //        }
    //    };

    //     const increase = (idx) => {
    //         counter[idx] += 1;
    //         setCounter([...counter]);
    //     };
    //     const decrease = (idx) => {
    //         const newCounter = [...counter];
    //         if (newCounter[idx] > 0) {
    //             newCounter[idx] -= 1;
    //             setCounter(newCounter);
    //         }
    //     };

    //     const handleChange = (e) => {
    //         e.preventDefault();
    //         setNumber(+e.target.value);
    //     };
    // const changeStep =()=>{
    //     setStep(prev=>prev +1)
    // }
    // const changeCount =()=>{
    //     setCount(prev=>prev +step)
    // }

    const [name, setName] = useState("");
    const [fname, setFname] = useState("");
    const [age, setAge] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [users, setUsers] = useState([]);
      const [searchTerm, setSearchTerm] = useState("");

    const addUser = () => {
        if (name && fname && age && phone && email) {
            setUsers([...users, { name, fname, age, phone, email }]);
            setName("");
            setFname("");
            setAge("");
            setPhone("");
            setEmail("");
        }
    };

    const deleteUser = (index) => {
        const updatedUsers = users.filter((user, i) => i !== index);
        setUsers(updatedUsers);
    };

    const filteredUsers = users.filter((user) => {
        return (
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.fname.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });
    
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-8">
                        <input
                            type="text"
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="form-control my-3"
                            placeholder="Search"
                        />
                        <table className="table table-bordered border-primary">
                            <thead>
                                <tr>
                                    <td>T/R</td>
                                    <td>Firstname</td>
                                    <td>Lastname</td>
                                    <td>Age</td>
                                    <td>Phone</td>
                                    <td>Email</td>
                                    <td>Remove</td>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.fname}</td>
                                        <td>{item.age}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    deleteUser(index)
                                                }
                                                className="btn btn-danger btn-sm">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-info">
                            <div className="hard-header">
                                <h3 className="text-center m-3">Add user</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={(e) => e.preventDefault()} id="form">
                                    <input
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
                                        className="form-control my-2"
                                        type="text"
                                        placeholder="Name"
                                        value={name}
                                    />
                                    <input
                                        onChange={(e) => {
                                            setFname(e.target.value);
                                        }}
                                        className="form-control my-2"
                                        type="text"
                                        placeholder="Lastname"
                                        value={fname}
                                    />
                                    <input
                                        onChange={(e) => {
                                            setAge(e.target.value);
                                        }}
                                        className="form-control my-2"
                                        type="number"
                                        placeholder="Age"
                                        value={age}
                                    />
                                    <input
                                        onChange={(e) => {
                                            setPhone(e.target.value);
                                        }}
                                        className="form-control my-2"
                                        type="tel"
                                        placeholder="Phone number"
                                        value={phone}
                                    />
                                    <input
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                        className="form-control my-2"
                                        type="text"
                                        placeholder="Email"
                                        value={email}
                                    />
                                </form>
                            </div>
                            <div className="card-footer">
                                <button
                                    form="form"
                                    onClick={addUser}
                                    className="btn btn-success m-2">
                                    add user
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        // <>
        //      <div className="container">
        //         <div className="row mt-5">
        //             { <div className="col-md-6 offset-3 text-center">
        //                 {/* <input
        //                     type="number"
        //                     className="form-control m-3"
        //                     placeholder="Enter number"
        //                     onChange={handleChange}
        //                     value={number}
        //                 /> */}
        //                 {/* <h1>Count:{count}</h1>
        //                 <h1>Step:{step}</h1> */}
        //                 {/* <button className="btn btn-primary m-3" onClick={changeStep}>Step</button>
        //                 <button className="btn btn-primary m-3" onClick={changeCount}>Count</button> */}
        //                 {/* <button className="btn btn-primary m-3" onClick={()=>setStep(prev=>prev +1)}>Step</button>
        //                 <button className="btn btn-primary m-3" onClick={()=>setCount(prev=>prev +step)}>Count</button> */}
        //                 {/* <button
        //                     className="btn btn-success"
        //                     onClick={() => addCounter(1)}>
        //                     add Counter
        //                 </button> */}
        //                 {/* <button
        //                     className="btn btn-success"
        //                     onClick={addCounter}>
        //                     add Counter
        //                 </button>
        //                 {counter.map((item, idx) => {
        //                     return (
        //                         <div key={idx}>
        //                             <button
        //                                 onClick={() => increase(idx)}
        //                                 className="btn btn-info m-3">
        //                                 +
        //                             </button>
        //                             <span>{item}</span>
        //                             <button
        //                                 onClick={() => decrease(idx)}
        //                                 disabled={item === 0}
        //                                 className="btn btn-secondary m-3">
        //                                 -
        //                             </button>
        //                         </div>
        //                     );
        //                 })} */}
        //             </div> }
        //         </div>
        //     </div>
        // </>
    );
}

export default App;
