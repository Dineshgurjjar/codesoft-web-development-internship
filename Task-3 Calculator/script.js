function Solve(val){
    let v = document.getElementById('res');
    v.value  += val
}
function Result(){
    let num1 =  document.getElementById('res').value;
    try{
        let num2 = eval(num1.replace('X','*'));
        document.getElementById('res').value =  num2;

    }
    catch(error){
        document.getElementById('res').value = 'Error in evaluating '
    }
}
function Clear() {
    var inp = document.getElementById('res');
    inp.value = '';
 }
function Back(){
    let back = document.getElementById('res');
    back.value = back.value.slice(0,-1);    
}
document.addEventListener("keydown",(event)=>{
    const keys = event.key;
    
    
     const validKey = '0123456789+-*/.%'
     if(validKey.includes(keys)){
        Solve(keys === '*'?'x':keys);
     }
     else if(keys === 'Enter'){
        Result();
     }
     else if(keys === 'Backspace'){
     Back();
     }
     else if (keys.toLowerCase() === 'c'){
        Clear();
     }
})