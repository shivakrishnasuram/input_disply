// // import React, { useState } from 'react'


// // function Inputs() {
// //     const [Data, setData] = useState({
// //         username: "",
// //         password: ""
// //     })
// //     function handlesubmit(e) {
// //         e.preventDefault();
// //         alert(`usename ${Data.username}`)
// //     }
// //     return (
// //         <div>
// //             <form action="" onSubmit={handlesubmit}>
// //                 <label htmlFor="">enter your name:=</label>
// //                 <input type="text"
// //                     value={Data.username}
// //                     name='name'
// //                     onChange={(e) => setData({ ...Data, username: e.target.value })}
// //                 />
// //                 <label htmlFor="">enter password</label>
// //                 <input type="password"
// //                     value={Data.password}
// //                     name='password'
// //                     onChange={(e) => setData({ ...Data, password: e.target.value })}
// //                 />
// //              {/* <button type="submit">Submit</button> */}
// //             </form>
// //         </div>
// //     )
// // }

// // export default Inputs


// import React, { useState } from 'react';

// function Inputs() {
//     const [Data, setData] = useState({
//         username: "",
//         password: ""
//     });

//     function handleSubmit(e) {
//         e.preventDefault();
//         alert(`username: ${Data.username} ${Data.password}`);
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="username">Enter your name:</label>
//                 <input
//                     id="username"
//                     type="text"
//                     value={Data.username}
//                     name="username"
//                     onChange={(e) => setData({ ...Data, [e.target.name]: e.target.value })}
//                 />
//                 <label htmlFor="password">Enter password:</label>
//                 <input
//                     id="password"
//                     type="password"
//                     value={Data.password}
//                     name="password"
//                     onChange={(e) => setData({ ...Data, [e.target.name]: e.target.value })}
//                 />

//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// }

// export default Inputs;





import React from 'react'

function Inputs() {
    const[Data,setData] =React.useState({
        username:"",
        password:""
    })
    function handlesub(e){
        e.preventDefault()
        alert(`it is ok ${Data.username} this is password${Data.password}`)
    }
    return (
        <div>
            <form action="" onSubmit={handlesub}>
                <label htmlFor="">enter your name</label>
                <input type="text"
                name='username'
                value={Data.username}
                onChange={(e)=>{setData({...Data,[e.target.name] :e.target.value})}}
                />
                <label htmlFor="">enter your password</label>
                <input type="password" name='password'
                value={Data.password}
                onChange={(e)=>{setData({...Data,[e.target.name]:e.target.value})}}  />
                <input type="submit"  />
            </form>
        </div>
    )
}
export default Inputs