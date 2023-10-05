function CheckInput()
{//I start by defining the variables of interest
  var firstName = document.getElementById("firstName").value;
  
  var lastName = document.getElementById("lastName").value;

  var allName = firstName + " " + lastName;

  var len = allName.length; //Using the .length command to count the number of characters in a variable

  var zipcode = document.getElementById("zipcode").value;
  
  var zlen = zipcode.length; 
  
  if (len > 20) //Logic check to fulfill the 20 characters or less condition of the assignment
  {
    document.getElementById("loginStatus").innerHTML = "Invalid name length";
  }
  else if (zlen != 5) //Ensuring that the zipcode is 5 digits
  {
    document.getElementById("loginStatus").innerHTML = "Invalid - Zipcode isn't 5 numbers";
  }
  else if (zipcode < 0 ) //Correcting for the risk that someone enters a negative number for their zipcode
  {
    document.getElementById("loginStatus").innerHTML = "Invalid - Zipcode is negative";
  }
  else 
  {
    location.replace("game.html"); //Taking the user to the craps game website from an earlier module if they entered their information correctly
  }
}
function playSpace() //Setting the play audio function and calling to the MP3 file
{
  mysound = new sound("us-lab-background-1.mp3");
  mysound.play();
}

function sound(src) //A sub function per class lecture for play() that actually starts the MP3 playing
{
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.play = function() {
      this.sound.play();
  }
}
function stopSpace() //Function for the stop audio button that reloads the page and stops the audio
{
  window.location.reload();
}