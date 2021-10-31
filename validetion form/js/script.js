
function check(x){
    var ch=x.value.length;
    if(ch==10){
        document.getElementById("nofirst").style="display:block;"
        document.getElementById("nosecond").style="display:none;"
    }
    else{
        document.getElementById("nofirst").style="display:none;"
        document.getElementById("nosecond").style="display:display;"
    }
}

function emailcheck(x)
{
    var mail=/^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,7}$/;
    if(x.value.match(mail))
    {
        document.getElementById("email1").style="display:block;"
        document.getElementById("email2").style="display:none;"
    }
    else{
        document.getElementById("email1").style="display:none;"
        document.getElementById("email2").style="display:block;"
    }
}

function display1(x)
{
    x.style="display:none;"
    document.getElementById("oldlabel1").style="display:block;"
    document.getElementById("oldpwd").type="text";
}

function nodisplay1(x){
    x.style="display:none;"
    document.getElementById("oldlabel2").style="display:block;"
    document.getElementById("oldpwd").type="password";
}

function display2(x)
{
    x.style="display:none;"
    document.getElementById("newlabel1").style="display:block;"
    document.getElementById("newpwd").type="text";
}

function nodisplay2(x){
    x.style="display:none;"
    document.getElementById("newlabel2").style="display:block;"
    document.getElementById("newpwd").type="password";
}

function display3(x)
{
    x.style="display:none;"
    document.getElementById("relabel1").style="display:block;"
    document.getElementById("repwd").type="text";
}

function nodisplay3(x){
    x.style="display:none;"
    document.getElementById("relabel2").style="display:block;"
    document.getElementById("repwd").type="password";
}


function fill(){
    var x=document.forms[0]
    for(var i=0;i<x.length-2;i++)
    {
       
        if(x.elements[i].value=="")
        {
            x.elements[i].focus()
            alert("Please Enter The Data")
            return false
        }
    }
    var ch=x.elements[3].value.length;
    if(ch==10);
    else{
        x.elements[3].focus()
        alert("Please Enter Valid Number")
        return false
    }
    var mail=/^[A-Za-z._]{3,}[0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,7}$/;
    if(x.elements[4].value.match(mail));
    else{
            x.elements[4].focus()
            alert("Please Enter Valid Email Id")
            return false
    }
    if(x.elements[6].value==x.elements[7].value) 
        return true
    else{
        x.elements[7].focus()
        alert("Please Enter Same Password")
        return false
    }
}
