import React from "react";
function add()
{
    var a=parseInt(prompt("Enter a numbers :"));
    var b=parseInt(prompt("Enter b numbers :"));
    var c=a+b;
    alert('Additions of numbers is :'+c);
}

function subs()
{
    var a=parseInt(prompt("Enter a numbers :"));
    var b=parseInt(prompt("Enter b numbers :"));
    var c=a-b;
    alert('Subtraction of numbers is :'+c);
}


function mult()
{
    var a=parseInt(prompt("Enter a numbers :"));
    var b=parseInt(prompt("Enter b numbers :"));
    var c=a*b;
    alert('Multiplication of numbers is :'+c);
}

function dv()
{
    var a=parseInt(prompt("Enter a numbers :"));
    var b=parseInt(prompt("Enter b numbers :"));
    var c=a/b;
    alert('Divisions of numbers is :'+c);
}

export {add,subs,mult,dv}