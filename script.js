const inp = document.querySelector("#inp");
const btn = document.querySelector("#btn");
const list = document.querySelector("#list");

btn.addEventListener('click', addToDo);

function addToDo() {
    const originalText = inp.value;
    if(inp.value=='')
        alert('You must write something.')
    else{
        // adding add to do event
        const capitalizedText = originalText.charAt(0).toUpperCase() + originalText.slice(1);
        let li = document.createElement('li');
        li.innerText = capitalizedText;
        inp.value = "";
        list.append(li);
        // adding cross icon 
        let span = document.createElement('span');
        span.innerHTML="\u00d7";
        li.append(span);
        // Adding checked todo event
        li.addEventListener('click', () => {
            li.classList.toggle('checked');
        });
        saveData();
        
    }
}
list.addEventListener('click',
function(e){
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
    saveData();
});
function saveData(){
    localStorage.setItem('data',list.innerHTML);
}
function showTask(){
    list.innerHTML = localStorage.getItem('data');
}
showTask()
 
