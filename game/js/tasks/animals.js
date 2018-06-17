export default class AnimalTask {
  constructor() {}
  createAnimalTask() {
    let globalWrap = document.createElement('div');
    globalWrap.className = 'flex global_wrap';
    let blockImg = document.createElement('div');
    blockImg.className  = 'flex task_wrap';
    let img = document.createElement('img');
    let taskName = document.createElement('h1');
    taskName.className = 'task';
    img.className = 'flex animal_task';
    document.body.appendChild(globalWrap);
    globalWrap.appendChild(blockImg);
    blockImg.appendChild(taskName);
    taskName.innerHTML="Who is it?";
    let inpVal = document.createElement('input');
    inpVal.setAttribute('id','animal_name');
    inpVal.className = 'insert_word';
    inpVal.setAttribute('type','text');
    blockImg.appendChild(img);
    blockImg.appendChild(inpVal);
    let buttonAnimal = document.createElement('button');
    buttonAnimal.innerHTML = 'Answer';
    buttonAnimal.className = 'submit_task';
    buttonAnimal.setAttribute('id','animal_submit');
    blockImg.appendChild(buttonAnimal);


    // block.setAttribute('id','x');
    let arrImg = ['elephant','leopard','lion','rabbit','zebra'];
    let rand = arrImg[Math.floor(Math.random() * arrImg.length)];
    img.setAttribute('src',`img/${rand}.png`);
    img.setAttribute('id',`img/${rand}.png`);
    let but = document.getElementById('animal_submit');
    but.onclick = function(event) {
    let value = document.getElementById('animal_name').value;
    if(img.id.indexOf(value)!=-1) {
      alert('y');
    }
    else {
      alert('n');
    }
    }
  }
}
// let animal = new AnimalTask();
// animal.createAnimalTask();
