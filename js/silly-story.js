// VARIABLE DECLARATIONS

// STEP 1: Declare and initialize variables
var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

// STEP 3: Create the variable that contains the story string that will be modified
var storyText = 'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

// STEP 4: Create three arrays, insertX, insertY, and insertZ
var insertX = ['Donald Trump', 'Jackie Chan', 'Santa Claus'];
var insertY = ['Area 51', 'Death Valley', 'Aruba'];
var insertZ = ['spontaneously combusted', 'rapidly sublimated', 'evaporated instantly'];

// FUNCTIONS

// STEP 2: have a look at the following function
function randomValueFromArray(array){
    return array[Math.floor(Math.random()*array.length)];
}

// STEP 6: Review the partially complete result() function below
function result() {
    // STEP 7: Create a new variable called newStory
    var newStory = storyText;

    // STEP 8: Use the randomValueFromArray() function to generate a value for each of three new variables
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    // STEP 9: Replace the placeholders in the newStory string
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);
    newStory = newStory.replace(':insertx:', xItem); // repeat replacement for second occurrence of :insertx:

    // STEP 10: If the user has typed a name in the customName field, replace the name 'Bob' in the story
    if(customName.value !== '') {
        newStory = newStory.replace('Bob', customName.value);
    }

    // STEP 11: If the metric radio button has been checked, we need to convert the temperature and mass numbers in the story
    if(document.getElementById("metric").checked) {
        // STEP 11a and 11b: Convert weight and replace the string
        var weight = Math.round(300 * 0.453592);
        newStory = newStory.replace('300 pounds', weight + ' kilograms');

        // STEP 12a and 12b: Convert temperature and replace the string
        var temp = Math.round((94 - 32) * 5 / 9);
        newStory = newStory.replace('94 farenheit', temp + ' degrees Celsius');
    }

    // STEP 13: Make the textContent property of the story variable equal to newStory
    story.textContent = newStory;

    // The following line makes the paragraph visible
    story.style.visibility = 'visible';
}

// EVENT LISTENERS

// STEP 5: Add a click event listener to the randomize variable
randomize.addEventListener('click', result);
