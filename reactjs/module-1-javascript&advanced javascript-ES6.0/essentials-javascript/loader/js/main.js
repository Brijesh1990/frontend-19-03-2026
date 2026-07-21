// var a=10;
// var b=20;
// var c=a+b;
// document.write("Additions of numbers is :",c) 

// create a function for onblur events change case of Input 

function display()
{
    var fnm=document.getElementById("fullName");
    fnm.value=fnm.value.toUpperCase();

    var em=document.getElementById("email");
    em.value=em.value.toUpperCase();

    var em=document.getElementById("email");
    em.value=em.value.toUpperCase();

    var dep = document.getElementById("dep");
    var index = dep.selectedIndex;
    dep.options[index].text = dep.options[index].text.toUpperCase();


    var doc = document.getElementById("doct");
    var index = doc.selectedIndex;
    doc.options[index].text = doc.options[index].text.toUpperCase();


    
    var conc = document.getElementById("conc");
    var index = conc.selectedIndex;
    conc.options[index].text = conc.options[index].text.toUpperCase();

    
    var ad=document.getElementById("syms");
    ad.value=ad.value.toUpperCase();

}