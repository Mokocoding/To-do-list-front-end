import "./Main.css";

 
function Main() {

  
  return (
    <>
     
        <div className="mainBox">
          <div className="title">To do list입니다</div>       
        </div>
        <div className="postBox">
          <p>
            to do calender
          </p>
          <input type="date" max="2023-12-31" className="date"></input>
          <div className="postList">투두리스트목록</div>
        </div>
        <div className="createPost">투두리스트작성</div>
         
    </>
  );
}

export default Main