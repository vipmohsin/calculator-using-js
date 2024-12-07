let string=''
let buttons=document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e) =>{
    if(e.target.innerHTML == '=') {
        string = eval(string);
        document.getElementById('inputbx').value = string;
    } 
    else if(e.target.innerHTML == 'AC'){
        string ='';
        document.getElementById('inputbx').value = string;
    }
    else if(e.target.innerHTML == 'DEL'){
        string =string.substring(0,string.length-1);
        document.getElementById('inputbx').value = string;
    }
    else if(e.target.innerHTML == '%'){
        string =string/100;
        document.getElementById('inputbx').value = string;
    }
    else{  
    console.log(e.target)
    string= string + e.target.innerHTML;
    document.getElementById('inputbx').value = string;
    }
    })

})