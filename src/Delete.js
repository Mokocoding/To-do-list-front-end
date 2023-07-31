import axios from 'axios';

function Delete() {
    const status = document.getElementById("status");
   
    axios.delete('https://jsonplaceholder.typicode.com/users')
      .then(response => status.innerHTML = response.status)
  
  
      return(
        <>
         <button onClick={Delete}>삭제하기</button>
        </> 
      ) 
  
  
  
}



   
 
  export default Delete;