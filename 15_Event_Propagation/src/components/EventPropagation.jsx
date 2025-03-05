
//!Event bubbling Ex:

// function EventPropagation() {

// const handleGrandParent=()=>{
//   console.log("grand parent clicked");
// }

//   const handleParentClick=()=>{
//     console.log("parent clicked");
  
// }
//     const handleChildClick=(event)=>{
//       console.log(event);
//         console.log("child clicked");
        //event.stopPropagation(); // Stops the event from reaching parent elements
//     }

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gray-100">
//           <div onClick={handleGrandParent} className="px-14 py-10 bg-blue-300 border-4 border-blue-500 ">
//             <div onClick={handleParentClick} className="px-13 py-9 bg-green-300 border-4 border-green-500 ">
//               <button onClick={handleChildClick} className="px-6 py-4 text-white text-semibold bg-red-300 border-4 border-red-500 ">
//                 Child Div
//               </button>
//             </div>
//           </div>
//         </div>
//       );
      
// }

// export default EventPropagation


//!Event Capturing ex:
function EventPropagation() {



    const handleGrandParent=(event)=>{
      console.log("grand parent clicked");
      event.stopPropagation(); // Stops the event from reaching child elements
    }
    
      const handleParentClick=()=>{
        console.log("parent clicked");
      
    }
        const handleChildClick=()=>{
        
            console.log("child clicked");
            
        }
    
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
              <div onClickCapture={handleGrandParent} className="px-14 py-10 bg-blue-300 border-4 border-blue-500 ">
                <div onClickCapture={handleParentClick} className="px-13 py-9 bg-green-300 border-4 border-green-500 ">
                  <button onClickCapture={handleChildClick} className="px-6 py-4 text-white text-semibold bg-red-300 border-4 border-red-500 ">
                    Child Div
                  </button>
                </div>
              </div>
            </div>
          );
          
    }
    
    export default EventPropagation