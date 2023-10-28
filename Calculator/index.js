let str = "";
let buttons = document.querySelectorAll('button');

Array.from(buttons).forEach(button => {
    button.addEventListener("click",(e)=>{
       clickfunction(e);
    })
});

function clickfunction(e){
    if(e.target.innerHTML == '='){
        str = eval(str);
        document.querySelector('input').value = str;
    }else if(e.target.innerHTML == 'AC'){
        str = '';
        document.querySelector('input').value = str;
    }
    else if(e.target.innerHTML == 'X'){
        str += '*';
        document.querySelector('input').value = str;
    }
    else if(e.target.innerHTML == 'DEL'){
        str = str.substring(0, str.length - 1);
        document.querySelector('input').value = str;
    }
    else{
    str += e.target.innerHTML;
    document.querySelector('input').value = str;
    }
}

