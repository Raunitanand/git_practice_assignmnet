let N=6;
let str="nrupul";
let count=0;
  let j=str.length-1;
    for(let i=0; i<j/2; i++)
    {
        let x=str[i];
        let y=str[j-i];
        if(x==y)
        {
            count=count+1;
        }
    }
    if(count>=(str.length/2))
    {
        console.log("Yes");
    }
    else
    {
        console.log("No");
    }