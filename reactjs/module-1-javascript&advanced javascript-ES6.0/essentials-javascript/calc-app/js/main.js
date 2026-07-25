// create a function for clear all values 
function clrAll()
{
 document.getElementById("result").value="";   
}
// create a function to input button values in result 
function inpValue(val)
{
    document.getElementById("result").value+=val;
}
// create a function for slice last or end  values
function slcApp()
{
    var sl=document.getElementById("result").value;
    var res=sl.slice(0,-1);
    document.getElementById("result").value=+res;
}

// create a function for airthematic  calculation

function finalResult()
{

 var x=document.getElementById("result").value;
 var y=eval(x);
 document.getElementById("result").value=y;   
    
}

// create a function for find square root 

function sqRoot()
{
    var x=document.getElementById("result").value; 
    var res=Math.sqrt(x);
    document.getElementById("result").value=res;
}
// create a function for find pow  
function sq1()
{
    var x=document.getElementById("result").value; 
    var res=Math.pow(x,2);
    document.getElementById("result").value=res;
}