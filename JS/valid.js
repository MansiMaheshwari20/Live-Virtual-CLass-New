function fun1()
{
    x=form1.t1.value;
    y=form1.t2.value;
    z=form1.t3.value;
   
    
  result=parseInt(x)+parseInt(y)+parseInt(z);
  form1.t4.value=result;

    per=parseInt((result/3)*100).toFixed(2);
    form1.t5.value=per;

    if(x>y && x>z)
    {
       hi=x;
       form1.t6.value=hi;
    }
    else if(y>x && y>z)
    {
        hi=y;
       form1.t6.value=hi;
    }
    else
    {
        hi=z;
        form1.t6.value=hi;   
    }
}
function jfun1()
{
    alert("Welcome eveeyone");
}
function jfun2()
{
    alert("By By");
}
function jfun4()
{
    alert("This field is not open for you!");
    document.getElementById("txt2").focus();
}
x=form1.txt3.value;
function myfunction(x)
{
    x.style.background="yellow";
}
function jfun5()
{
    var result=document.getElementById("s1").value;
    if(result=="India")
    {
        document.getElementById("txtarea1").value="India is my country";
    }
    if(result=="China")
    {
        document.getElementById("txtarea1").value="China is my country";
    }
    if(result=="Sri Lanka")
    {
        document.getElementById("txtarea1").value="Sri Lanka is my country";
    }
}
function jquiz()
{
    var x=form1.r1.value;
    var y=form1.r2.value;
    var result=0;
    if(x=="" || y=="")
    {
        alert("Mark the answers");
    }
    else{
    if(x=="v1")
    result=result+2;
    if(y=="q2")
    result=result+2;
   
    
    alert("You got "+result+" marks");
    }
}
function promptfun()
{
var text;
var c = prompt("What's your hobby?");
switch(c) {
  case "Dancing":
    text = "Excellent choice!";
    break;
  case "Singing":
    text = "Good choice!";
    break;
}
}

function onbox()
{
    var x=0;
    while(x<3) {
        a=document.getElementById("c1").checked;
        if(a==true){
            x=x+1;
        }
        b=document.getElementById("c2").checked;
        if(b==true){
            x=x+1;
        }
        c=document.getElementById("c3").checked;
        if(c==true){
            x=x+1;
        }
        if(x<3)
        {
            alert("you have selected: "+x+"box");
            break;
        }
    } 
}
function replacefun()
{
    location.replace("https://www.google.co.in/");
}

function vali()
{
    var inpobj=document.getElementById("id1");
    if(!inpobj.checkValidity()) {
        document.getElementById("demo1").innerHTML = impobj.validationMessage;
    }
    else {
        document.getElementById("demo1").innerHTML = "Thankyou!";
    }
}

function musicfun()
{
    var a=form1.tt1.value;
    var b=form1.s2.value;
    var c="";
    var cc="";
    var c1="";
    var c3="https://in.search.yahoo.com/search?p=";
    var c4="&";
    if(b=="Google")
    {
        var d=c1.concat(a);
        var d=d.concat(cc);
        window.open(d);
    }
    else if(b=="Yahoo")
    {
        var d=c3.concat(a);
        var d=d.concat(c4);
        window.open(d);
    }
    else
    {
        var d=c.concat(a);
        window.open(d); 
    }
}