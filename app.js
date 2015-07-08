//List of prompts for the user
var prompts = [
  'Type your name',
  'Type an adjective',
  'Type a noun'
];

//Declare a variable named 'answers' that is an empty array
var answers = [];
//declare a variable named 'currentPrompt' that will be a counter
var currentPrompt = 0;

//create a function that will move to the next prompt
var nextPrompt = function () {
  //if there is no answer in the form
  if (currentPrompt !=0) {
    answers.push($('input').val());
  }
  if (currentPrompt < prompts.length) {
    //pu the first prompt in all html elemets with the class 'prompt'
    $('.prompt').html(prompts[currentPrompts])
    +'<br><input type="text">');
    //move the next prompt into the variable currentPrompt
    currentPrompt = currentPrompt + 1;
  } else {
    //or else: if at the end of the array, put a new message into the html
    showFinal();
  }
}

//writes user answers into HTML
var showFinal = function() {
  $('.prompt').html('This is the story of <span class ="fill">' + answers[0]+
  '</span>' and the <span class="fill">' + answers[1]+'</span>' <span class="fill">' +answers[2]+"</span>.");
  $('button').hide();
}

//runs the nextPrompt function when the button is clicked
$('button').click(function() {
  nextPrompt();
});
