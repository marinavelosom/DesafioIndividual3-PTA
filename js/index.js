const element = document.querySelector('.click');
const title = document.querySelector('#title');
const backGround = document.querySelector('body');

let flag = 1;

element.addEventListener('click', (e)=>{
        if(flag == 1){
            backGround.style.background = "#292929"
            title.textContent = 'Background: #292929';
            flag = 2;
        }else if(flag == 2){
            backGround.style.background = "#C7C7C7"
            title.textContent = 'Background: #C7C7C7';
            flag = 3;
        }else{
            backGround.style.background = "#F2F2F2"
            title.textContent = 'Background: #F2F2F2';
            flag = 1; 
        }
})