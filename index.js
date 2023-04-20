let limit=1;
let attempt=1;
let dis = 3
let ans = Math.floor(Math.random() * 100)+1;

// function reset()
// {
//    let a = confirm("Do you want to continue")
//    if(a)
//    {
//     attempt++;
//      limit=0;
//       Game()
//    }
// }

function Game()
{

//let ans=23;

//alert("You have 3 attempts to guess the accurate seat number!")
      
    console.log(ans)
    let seat = parseInt(document.getElementById("userInput").value);
    let c = document.getElementById("atm")
    if(limit<3)
    {
        if(seat>ans){
            document.getElementById("tip").style.color = "palevioletred"
            document.getElementById("tip").innerHTML = "<span>Actual number is smaller than your guess</span>"
            dis=dis-1
            
            c.innerHTML = dis
            limit++
           
           
        }
        else if(seat<ans){
            document.getElementById("tip").style.color = "palevioletred"
            document.getElementById("tip").innerHTML = "<span>Actual number is Larger than your guess</span>"
            dis=dis-1
            c.innerHTML = dis
            limit++
           
           
        }
        else if(seat==ans){
            document.getElementById("won").style.display="block";
            document.getElementById("c").style.display="none";
        }
    
    }
   
    else
    {
     
      document.getElementById("lose").style.display="block";
      document.getElementById("c").style.display="none";
    //   reset()
    }

//document.write("Sorry!! You LOSE")
}