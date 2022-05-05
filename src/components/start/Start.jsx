import './Start.css';

let first = [];
let second = [];
let third  = [];
let fourth = [];
let fith = [];
let sixth = [];
let seventh = [];
let eigth = [];

let inputValue;

function setName(value) {
  inputValue = value;
}

function addValue1(){
  first.push(inputValue);
  document.querySelector('.neons').value = "";
}
function addValue2(){
  second.push(inputValue);
  document.querySelector('.neons').value = "";
}
function addValue3(){
  third.push(inputValue);
  document.querySelector('.neons').value = "";
}
function addValue4(){
  fourth.push(inputValue);
  document.querySelector('.neons').value = "";
}
function addValue5(){
  fith.push(inputValue);
  document.querySelector('.neons').value = "";
}
function addValue6(){
  sixth.push(inputValue);
  document.querySelector('.neons').value = "";
}
function addValue7(){
  seventh.push(inputValue);
  document.querySelector('.neons').value = "";
}
function addValue8(){
  eigth.push(inputValue);
  document.querySelector('.neons').value = "";
}
function gameStart(){
  document.getElementById("9").remove();
  document.getElementById("10").remove();
  document.getElementById("11").remove();
  document.getElementById("12").remove();
  document.getElementById("13").remove();
  document.getElementById("14").remove();
  document.getElementById("15").remove();
  document.getElementById("16").remove();
  document.querySelector(".neons").remove();
  document.querySelector(".game").remove();
}

function Start() {
  return (
    <div className="main">
        <div className = "teams">
          <div className="team_1"><p className='ps' id="1">First team {first}</p></div>
          <div className="team_2"><p className='ps' id="2">Second team {second}</p></div>
          <div className="team_3"><p className='ps' id="3">Third team {third}</p></div>
          <div className="team_4"><p className='ps' id="4">Fourth team {fourth}</p></div>
          <div className="team_5"><p className='ps' id="5">Fith team {fith}</p></div>
          <div className="team_6"><p className='ps' id="6">Sixth team {sixth}</p></div>
          <div className="team_7"><p className='ps' id="7">Seventh team {seventh}</p></div>
          <div className="team_8"><p className='ps' id="8">Eigth team {eigth}</p></div>
        </div>
        <div className="binput">
            <div className="buttons">
              <button className="add" onClick={addValue1} id="9">Add a team player to first team</button>
              <button className="add" onClick={addValue2} id="10">Add a team player to second team</button>
              <button className="add" onClick={addValue3} id="11">Add a team player to third team</button>
              <button className="add" onClick={addValue4} id="12">Add a team player to fourth team</button>
              <button className="add" onClick={addValue5} id="13">Add a team player to fith team</button>
              <button className="add" onClick={addValue6} id="14">Add a team player to sixth team</button>
              <button className="add" onClick={addValue7} id="15">Add a team player to seventh team</button>
              <button className="add" onClick={addValue8} id="16">Add a team player to eighth team</button>
            </div>
            <input type='text' placeholder=' Enter name' className='neons' onChange={event => setName(event.target.value)}/>
        </div>
        <div class="next">
          <a href="#"className="game" onClick={gameStart}><span>Start the game</span></a>
        </div>
    </div>
  );
}

export default Start;