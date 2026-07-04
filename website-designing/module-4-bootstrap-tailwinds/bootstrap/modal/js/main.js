function mainFunction()
{
setTimeout("display()",2000)     
}
function display()
{
document.getElementById("loader").style="display:none";
document.getElementById("main-content").style="display:block";    
}