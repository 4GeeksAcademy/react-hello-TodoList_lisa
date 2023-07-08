import React, { useState } from 'react';


const AnyComponent = () => {
    
    const [inputValue, setInputValue ] = useState('');
   const[newElement,setNewElement] = useState([]);

    const validateInput  =() =>{
        if (inputValue ==="") {alert('The input cannot be empty');
    }
        else{
            setNewElement( [...newElement,inputValue]);
            setInputValue ('');

        }
    };

    const deleteElement = (indexElement) => {
        let inputValue = newElement.filter ((newE,index)=> index !== indexElement)
        setNewElement(inputValue)
    }
  

    return (
        <div className='container bg-light'>
            <h1 className='  text-danger text-center'>todos</h1>
            <div className='card  w-75 mb-3 ' style={{width:'18rem'}}>
            <div className="input-group mb-10 rounded-0 ">
       <input type='text' className='form-control' placeholder='What need to be done?' aria-label="Example text with button addon" aria-describedby="button-addon1"onChange={e =>setInputValue(e.target.value)} value={inputValue} />
       <button className="btn btn-outline-secondary" onClick={validateInput} type="button" id="button-addon2">Enter</button>
       </div>
       <ul className='list-group list-group-flush'>
        

        {newElement.map((newE,index) => {
            return  <li className='list-group-item form-control d-flex justify-content-between align-items-center'  key={index}> {newE} <span  onClick= { () => deleteElement(index)}>x</span> </li>
        }
        )}
       </ul>
     

</div>

        </div>

      

    

    );
}

export default AnyComponent;