

//Write to console log a message with dog's first and last name
const dogFirst = 'Glacier';
const dogLast = 'Fiore';
console.log('Hi everyone. My name is '+ dogFirst.concat( ' ', dogLast)); //use concatenation to include first and last name of dog

//create myDog function
function myDog() {
  var x=document.getElementById("myDog").src;
  document.getElementById("bark").innerHTML = x;
}

//define what the function will do when it runs
function dogFunction(choice) {
    var answer1 = document.getElementById("dog1").innerHTML;
    var answer2 = document.getElementById("dog2").innerHTML;


//    if user clicks on Take a Nap, change verbiage on screen and buttons
  choice == 1 && answer1 == "Take A Nap"?
(
  //if it's true add this verbiage to body, change the buttons to Eat and Play
  document.getElementById("adventure").innerHTML = "Glacier goes to her bed by the window for some much needed rest.  <br><br>When she wakes from her nap, what do you think she should do next?",
  document.getElementById("dog1").innerHTML = "Eat",
  document.getElementById("dog2").innerHTML = "Play"
):

//If the Take a Nap wasn't chosent, answer this question.  Was Adventure chosen?  If so, add verbiage and change button to Home and Carrott
  choice == 2 && answer2 == "Go On An Adventure"?
(
  document.getElementById("adventure").innerHTML = "Glacier heads out of the house, and up the hill to see her Bernese Mountain Dog friend Molly. </br></br>Glacier and Molly play chase each other for hours.  She's exhausted!  </br></br>What should she do now?",
  document.getElementById("dog1").innerHTML = "Go Home",
  document.getElementById("dog2").innerHTML = "Visit Carrot"
):

//If Go On An Adventure was not clicked, but Take a Nap was chosen THEN Eat was chosen, change verbiage to this
  choice == 1 && answer1 == "Eat"?
(
  document.getElementById("adventure").innerHTML = "Glacier is so hungry after her long nap.  Her dad put a few pieces of chicken in her bowl for her. </br></br>  She's going to eat, then head outside, sit at the top of the driveway and protect the property from the viscious turkeys"
):

//if Go On An Adventure not clicked, but Take a Nap was chosen, AND Eat was not chosen, did the user choose Go on an Adventure AND Play
  choice == 2 && answer2 == "Play"?
(
    document.getElementById("adventure").innerHTML = "Glacier loves to play with her dog friend Molly and her donkey friend Carrot.  Who should she go play with?",
    document.getElementById("dog1").innerHTML = "Molly",
    document.getElementById("dog2").innerHTML = "Carrot"
):

//if Go On An Adventure not click, Take A Nap was chosen, and Play was not chosen,
  choice ==1 && answer1 == "Go Home"?
(
    document.getElementById("adventure").innerHTML = "Glacier goes back home to her bed on the driveway where she can look over the property and her make believe flock"
):
  choice ==2 && answer2 == "Visit Carrot"?
(
  document.getElementById("adventure").innerHTML = "Glacier goes to the pasture and plays tag with Carrot the donkey"
):
choice ==1 && answer1 == "Molly"?
(
  document.getElementById("adventure").innerHTML = "Glacier heads out of the house, and up the hill to see her friend Molly"
):
  document.getElementById("adventure").innerHTML = "Glacier goes to the pasture and plays tag with Carrot the donkey"

}

function reloadPage()
{
location.reload();
}
Footer
