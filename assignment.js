//(feetToMile-1)

 function feetToMile(feet)
{
    let miles;
    const mile=feet/5280;
    
    if(mile >= 1)
    {
         miles=Math.round(mile);
    }
    else
    {
       return "distance cannot be negative";
    }
    
    return  miles;
}
var Miles=feetToMile(10560);
console.log("Total Mile:", Miles);

 

//(alculator-2)
   
    function woodCalculator(chair, table, bed)
   {
        const chairCalculator = chair * 1;
        const tableCalculator = table * 3;
        const bedCalculator   = bed   * 5;
        let totalCalculator = chairCalculator + tableCalculator + bedCalculator;
        const count = Math.round(totalCalculator);
        return  count ;
    }

    let calculator = woodCalculator(2.4, 2.6, 2.7)
    console.log("Total Wood Needed:", calculator);


    


    // (brickCalculator-3)
    function brickCalculator(building)
    {

    
        let bricks;
        if(building<=10)
        {
            bricks = 15 * 1000;   //15 tola building er jonne bricks 
        }
        else if(building>=11 && building<=20)
        {
            bricks = 12 * 1000;   //15 tola building er jonne bricks 
        }
        else if(building >20)
        {
            bricks = 10 * 1000;  //15 tola building er jonne bricks 
        }
        
        return bricks;
    }   
    let building = brickCalculator(15);
    console.log("Total Bricks Needed:", building);




//(tinyFriend-4)

function tinyFriend(string)
{
    let strLength = [];
    for (let i = 0; i < string.length; i++)
    {
        strLength.push(string[i].length);// Creating a new array with string length of each element of a given array
    
    }
    
        const x = strLength.indexOf(Math.min(...strLength));
    
         //Math.min(...strLength) - finds minimum number in new array which presents the smallest string
          //in the given array.
         //x = strLength.indexOf(...) finds the position of the smallest string
    
         return string[x];
}
        let names = ["Ashik", "Anik", "Ashadul", "Jamal"];
        const result=tinyFriend(names);
    
        console.log("Tinny Name Is:", result); 

  
   
   
























