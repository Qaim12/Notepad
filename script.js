const notesContainer = document.querySelector('.notes-container');
const clickBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem('notes');
}

showNotes();

function updateStorage(){
    localStorage.setItem('notes', notesContainer.innerHTML);
}

clickBtn.addEventListener('click',()=>{
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    img.className = 'delete-icon';
    inputBox.setAttribute("contenteditable","true");
    img.src = 'images/delete.png';
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener('click',(event)=>{
if(event.target && event.target.classList.contains('delete-icon')){
    event.target.parentElement.remove();
    updateStorage();
}
else if(event.target.tagName === 'P'){
    notes = document.querySelectorAll(".input-box");
    notes.forEach(nt =>{
        console.log(nt);
        nt.onkeyup = function(){
            updateStorage();
        }
    })
}
})

document.addEventListener('keydown', e=>{
    if(e.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
