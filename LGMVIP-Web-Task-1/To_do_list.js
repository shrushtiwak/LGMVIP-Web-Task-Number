document.querySelector('#push').onclick = function
(){
    if(document.querySelector('#giventasks input').
    value.length == 0){
        alert("Enter your task...")
    }
    else{
         document.querySelector('#tasks').innerHTML
        += `
            <div class="task">
                <span id="taskname">
                  ${document.querySelector
                  ('#giventasks input').value}
                </span>
                <button class= "delete">
                    <i class="fa-solid fa-delete-left"></i>
                </button>  
            </div>
        `;

        var written_tasks = document.
        querySelectorAll(".delete");
        for(var i=0; i<written_tasks.length; i++){
            written_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".task");
        for(var i =0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }
        document.querySelector("#giventasks input").
        value=" "
    }    
}