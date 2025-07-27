function displayRecipe(respose){
    new Typewriter("#recipe", {
  strings: respose.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});

}

function generateRecipe(event){
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "t5cfo950cb740d63be0666e8faf23d69";
    let context = "You are a poem expert and love to write short english poems. Your mission is to generate a short and nice poem in basic HTML and seperate each line of the poem with a <br/>. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and not at the beginning.Make sure to provide a clear and precise answer";
    let prompt = `User instructions: Generate a simple poem including ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let recipeElement = document.querySelector("#recipe");
    recipeElement.classList.remove("hidden");
    recipeElement.innerHTML = `<div class="generating">⏳ </div> Generating a Poem about ${instructionsInput.value}`;

    axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);