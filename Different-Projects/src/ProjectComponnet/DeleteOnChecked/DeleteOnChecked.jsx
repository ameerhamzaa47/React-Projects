import React, { useState } from 'react';
import Header from '../Header';
import { Button } from 'react-bootstrap';

function DeleteOnChecked() {
    const [value, setValue] = useState(['Cricket', 'FootBall', 'Tennis', 'Yoga', 'k']);
    const [checkedItems, setCheckedItems] = useState({});

    // Function to delete an item by its index
    const delItem = (index) => {
        setValue(value.filter((_, i) => i !== index));
        // Optionally, remove the checked state for deleted items
        setCheckedItems(prevState => {
            const newState = { ...prevState };
            delete newState[index];
            return newState;
        });
    };

    // Handle checkbox changes
    const handleCheckboxChange = (index, checked) => {
        setCheckedItems(prevState => ({
            ...prevState,
            [index]: checked
        }));
    };

    return (
        <div>
            <Header />
            <div className="UpperStopWatch">
                <h1>Delete On Checked</h1>
                {
                    value.map((item, i) =>
                        <div key={i}>
                            <h2>
                                <input type='checkbox'
                                    checked={!!checkedItems[i]}
                                    onChange={(e) => handleCheckboxChange(i, e.target.checked)} /> |
                                {item} |

                                {
                                    checkedItems[i] &&
                                    <Button onClick={() => delItem(i)}>Delete</Button>
                                }
                            </h2>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default DeleteOnChecked;



// import React, { useState } from 'react'
// import Header from '../Header'
// import { Button } from 'react-bootstrap'

// function DeleteOnChecked() {
//     let [value,setValue]=useState(['Cricket', 'FootBall', 'Tennis', 'Yoga', 'k'])
//     let [check,setcheck]=useState({})

//     const delItem=(index)=>{
//         setValue(value.filter((_,i)=>i !== index))

//         // for checkox

//         setcheck(prevState => {
//             const newState = { ...prevState };
//             delete newState[index];
//             return newState;
//         });
//     }

//     const handleCheckboxChange = (index, checked) => {
//         setcheck(prevState => ({
//             ...prevState,
//             [index]: checked
//         }));
//     };

//   return (
//     <div>
//       <Header/>
//       <div className="UpperStopWatch">
//         <h1>Delete On Checked</h1>
//         {
//             value.map((item,i)=>
//                 < >
//             <h2>
//             <input onChange={(e)=>handleCheckboxChange(i,e.target.checked)} type='checkbox'/> |
//                 {item} |
//                 {
//                 checkedItems[i] &&
//                                     <Button onClick={() => delItem(i)}>Delete</Button>
//                                 }
//             {/* {
//                 check[i]?
//                 <Button onClick={()=>delItem(i)}>Delete</Button>
//                 :null
//             } */}
//             </h2>
//             </>

//             )
//         }
//       </div>
//     </div>
//   )
// }

// export default DeleteOnChecked
