let submit=document.querySelector(".submit");

submit.addEventListener('click',()=>{

    var output=document.querySelector(".output");
    console.log(output);
    let imageurl=document.querySelector("#img").value;
    var generatedurl=`https://drive.google.com/uc?export=view&id=${imageurl}`;
    const data={
        name: document.getElementById("name").value,
        img: generatedurl,
        email: document.getElementById("email").value,
        skills: document.getElementById("skills").value
    };
    console.log(data);
    let newlist=document.createElement('div');
    newlist.classList.add('addData');
    newlist.innerHTML=`
      <div class="NameContainer">${data.name}</div>
      <a href="mailto:shrushtiwakchaware@gmail.com">${data.email}</a><br>
      <div class="SkillContainer">${data.skills}</div>
    `
    console.log(newlist);
    output.appendChild(newlist);
    let input=document.querySelectorAll('input');
    input.forEach(input => {
        input.value = '';
      });

})