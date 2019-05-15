/*function area(a,b,c)
{
  var p=(a+b+c)/2;
     var result=p*(p-a)*(p-b)*(p-c);
     return(Math.sqrt(result));
}

function convertc(c)
{
    f=(c/5)*9+32;
    return f;

}
function convertf(f)
{
    c=((f-32)/9)*5;
    return c;
}

function max(n1,n2,n3)
{
    if( n1>=n2 && n1>=n3)
        return n1;

    else if (n2>=n1 && n2>=n3)
        return  n2;

    else
        return  n3;

}

function mult(a)
{
    if(a%3==0 || a%7==0)
    return true;
    else
     return false;
}

function capital()
{
    var str = "we are the champions";
  var res = str.split(" ");
  console.log(res);

  for(var i = 0 ; i < res.length ; i++)
  {
    res[i] = res[i].charAt(0).toUpperCase()+ res[i].substr(1);
    newStr = res.join(" ");
    }
    return newStr;
}       

function dna(str1,str2)
{ var count=0;
    var res1=str1.split("");
    var res2=str2.split("");
    for(var i=0;i<res1.length;i++)
    {
        for(var j=0;j<res2.length;j++)
        {
            if(res1[i]!=res2[j])
            count++;
            i++;
        }
} 
return count;
}

var result=dna("GAGCCTACTAACGGGAT","CATCGTAATGACGGCCT");
console.log(result);

*/
function pangram(str)
{
    str1="abcdefghijklmnopqrstuvwxyz";
    x=str.split("");
    y=str1.split("");
var count=0;
var r=0;
for(i=0;i<26;i++)
{
    for(j=0;j<x.length;j++)
    {     
        if(y[i]==x[j])
        {  
           count=1;
        }
      
     }

     if(count==0)
     {
        r=1;
        
     }

   count=0;

}
var p = r==1?false:true;
return p;
        
}

console.log(pangram("The quick brown fox jumps over the lazy dog"));


function isogram(str)
{
  l=str.split("");
  l.sort();
  var j=1;
  
  for(i=0;i<l.length;i++)
  {
      if(l[i]==l[i+j])
      p=1;


  }
  if(p==1)
  return false;
}

function iso(str)
{   var fin=[];
    m=str.split(" ");
    for(var i = 0 ; i < m.length ; i++)
  {
    fin[i] = m[i].charAt(0)  
    t=fin.join("");
    }

    console.log(t);
    console.log(typeof(t));
    
}       



function check(arr)
{
  p = arr.indexOf(30);
  q= arr.indexOf(40);
  if(p== -1 || q== -1)
  console.log("not present");
  else
  console.log("present");
}

function swap(arr)
{
    q=arr.length;
    var r=arr[0];
    arr[0]=arr[q-1];
    arr[q-1]=r;
    console.log(arr);
}

function highlow(arr)
{
    p=arr.sort();
    q=arr.length;
    console.log("smallest element:"+ p[0]);
    console.log("smallest element:"+ p[q-1]);

}


function sum(arr)
{
    sum=0;
    for(i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];

    }
    console.log("sum is "+ sum);
}
var person={};
person.name="lakshya";
person.age=30;
 person.mobiles={};
person.mobiles.home=113343;
person.mobiles.office=15668;
delete person.name;
console.log(person);


var person1 = {};

person1.name =  "lakshya";
person1.age = 22;
person1.mobiles = [123,345];


var person2= {};

person2.name =  "keyur";
person2.age = 22;
person2.mobiles = [345,778];


var person3 = {};

person3.name =  "yovan";
person3.age = 34;
person3.mobiles = [567,789];

function getvalue(object,prop)
{
    return object[prop];
}

function setvalue(object,prop,propvalue)
{
    return object[prop]=propvalue;
}

function getStatus(person){
    var status = "invalid age";
    
    if(person.age>60 && person.obj<=100){
        status = "old";
    }
    else if(person.age>20){
        status = "adult";
    }
    else if(person.age>10){
        status = "teenager";
    }
    else if(person.age>=0){
       status = "kid"; 
    }
    
    return status;
}

function addMobile(person,mobileNumber){
     return person.mobiles.push(mobileNumber);
}

function removeMobile(person,mobileNumber){
    var index = person.mobiles.indexOf(mobileNumber)
     return person.mobiles.splice(index,1);
}

function totalMobiles(person){
    return person.mobiles.length;
}
