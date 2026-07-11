document.addEventListener("DOMContentLoaded", function() {
  const welcomeBanner = document.getElementById("welcome-banner");
  
  // only runs on index.html
  if (welcomeBanner) {
    const hours = new Date().getHours();
    let greeting = "Welcome";
    
    if (hours < 12) {
      greeting = "Good morning";
    } else if (hours < 18) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }

    welcomeBanner.innerHTML = `✨ ${greeting}! Welcome to Max's portal of Austrian Weinviertel wine making.`;
    welcomeBanner.style.display = "block"; // Make visible only on home page
  }
});

function recommendWine() {
  // 1. Get user inputs
  const nameInput = document.getElementById("userName").value.trim();
  const foodChoice = document.getElementById("foodSelect").value;
  const resultBox = document.getElementById("recommendationResult");

  // 2. Validate that the user entered data
  if (!nameInput || !foodChoice) {
    resultBox.style.display = "block";
    resultBox.style.backgroundColor = "#ffe3e3";
    resultBox.style.border = "1px solid #ff8787";
    resultBox.style.color = "#c92a2a";
    resultBox.innerHTML = "⚠️ Please enter your name and select a meal so I can recommend a wine!";
    return;
  }

  // 3. Determine recommendation based on food selection
  let wineName = "";
  let tastingNote = "";
  let temp = "";

  switch (foodChoice) {
    case "schnitzel":
      wineName = "Weinviertel DAC Classic (Grüner Veltliner)";
      tastingNote = "The crisp acidity and signature white pepper spice ('Pfefferl') cut right through the rich breading of classic Wiener Schnitzel.";
      temp = "8–10°C (Chilled)";
      break;
    case "cheese":
      wineName = "Hohenwarth Roter Veltliner";
      tastingNote = "An indigenous specialty! Its creamy texture and delicate yellow apple aromas harmonize beautifully with fresh goat cheese and herbs.";
      temp = "10–12°C (Lightly Chilled)";
      break;
    case "beef":
      wineName = "Weinviertel DAC Reserve";
      tastingNote = "Aged in wooden casks, this robust Grüner Veltliner has enough body and deep spicy structure to stand up to roasted meats.";
      temp = "12–14°C (Cellar Temp)";
      break;
    case "asian":
      wineName = "Falkenstein Riesling";
      tastingNote = "The crisp limestone minerality and vibrant citrus notes refresh the palate and cool down spicy chili and garlic flavors.";
      temp = "8–10°C (Chilled)";
      break;
  }

  // 4. Output styled HTML result directly to the page
  resultBox.style.display = "block";
  resultBox.style.backgroundColor = "#e8f5e9";
  resultBox.style.border = "1px solid #81c784";
  resultBox.style.color = "#1b5e20";
  
  resultBox.innerHTML = `
    <h3 style="margin-bottom: 10px;">🍷 Cheers, ${nameInput}! Here is your Weinviertel Pairing:</h3>
    <p><strong>Recommended Wine:</strong> ${wineName}</p>
    <p><strong>Why it works:</strong> ${tastingNote}</p>
    <p style="margin-top: 8px; font-size: 0.9rem;"><em>💡 Ideal Serving Temperature: ${temp}</em></p>
  `;
}