import './Start.css';

let first = [];
let second = [];
let third  = [];
let fourth = [];
let fith = [];
let sixth = [];
let seventh = [];
let eigth = [];
let input = document.querySelector('input');
document.querySelector('.add').onclick=function(){
    first.push(input.value);
}

function Start() {
  return (
    <div className="main">
        <div className = "teams">
          <div className="team_1"><p>{first}</p></div>
          <div className="team_2"><p>{second}</p></div>
          <div className="team_3"><p>{third}</p></div>
          <div className="team_4"><p>{fourth}</p></div>
          <div className="team_5"><p>{fith}</p></div>
          <div className="team_6"><p>{sixth}</p></div>
          <div className="team_7"><p>{seventh}</p></div>
          <div className="team_8"><p>{eigth}</p></div>
        </div>
        <div className="binput">
            <button className="add">Add a team player</button>
            <input type='text' placeholder='Enter name'/>
        </div>
    </div>
  );
}

export default Start;
