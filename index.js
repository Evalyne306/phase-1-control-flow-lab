function scuberGreetingForFeet(distance ){
  let message
  if(distance <=400){
  message="This one is on me!"
  } else if(distance >2000 && distance<=2500){
  message="I will gladly take your thirty bucks.";
  } else if(distance >2500){
    message="No can do.";
  }
  return (message);
}
  

scuberGreetingForFeet()

 

  // Write your code here!
  function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
  }

  ternaryCheckCity()

  // Write your code here!


function switchOnCharmFromTip(tip){
  switch(tip){
    case "generous":
      return "Thank you so much."
    case "not as generous":
      return "Thank you."
    default:
      return "Bye."
  }
}
  // Write your code here!

