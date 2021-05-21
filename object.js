/*let user={
    name:'Manali',
    email:'manalirenavikar@gmail.com',
    trainings:['c#','Full Stack','SQL']
};

console.log(user);

//************Function************ */

//Function declaration
/*
function great()
{
    console.log("Hello this is function declaration");
}

//Function expression

const greatF=function()
{
    console.log("This is function expression");
};


//Arrow function
const greatA =(radius)=>
{
    return 3.2*radius*radius;
}

const greetp=function()
{
    return "Convert function defination to arrow function";
}

const greetPA=()=> "Converted to Arrow Functiom";

const bill=function(products,tax)
{
    let total=0;
    for(let i=0;i<products.length;i++)
    {
        total+=products[i]+products[i]*tax;
    }
    return total;
}

const bill=(products,tax)=>
{let total=0;
    for(let i=0;i<products.length;i++)
    {
        total+=products[i]+products[i]*tax;
    }
    return total;

}
*/
function factoral(num)
{
    if (num === 0 || num === 1)
    return 1;
    for (let i = num - 1; i >= 1; i--) {
        // We store the value of num at each iteration
        num = num * i
    }
    return num;
}

console.log(factoral(4));

/*
console.log(greetPA());
greetp();
great();
greatF();
console.log(greatA(2));
*/

/*Write a function subLength() that takes 2 parameters, a string and a single character. 
The function should search the string for the two occurrences of the character and return the
 length between them including the 2 characters. If there are less than 2 or more than 2 occurrences
  of the character the function should return 0.
*/

function subLength(str,char)
{
     let charcount=0;
     let len=-1;
    for(let i=0;i<=str.length;i++)
    {
        if( str[i]===char)
        {
            charcount++;
            
        } 
            
      }
      
     return charcount;
      
}
const convertToArray=str=>
{
    let arr=[];
    for(let i=0;i<str.length;i++)
    {
        arr[i]=str[i];
    }
    return arr;
}

const map1 = array1.map(x => x==char);

console.log(map1(arr['s','a','d']));

console.log(convertToArray("Saturday"));


//const result = words.filter(word ,char => words[word]===char);

console.log(subLength("Saturday","a"));

//console.log(result("Saturday","a"));