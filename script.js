const symbols = ["🐱", "💎", "🍒", "🔔", "⭐"];
const slotDisplay = document.getElementById("slots");
const resultDisplay = document.getElementById("result");
const spinButton = document.getElementById("spin");

function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function spinSlots() {
  const slot1 = getRandomSymbol();
  const slot2 = getRandomSymbol();
  const slot3 = getRandomSymbol();

  slotDisplay.textContent = `${slot1} ${slot2} ${slot3}`;

  if (slot1 === slot2 && slot2 === slot3) {
    resultDisplay.textContent = "🎉 JACKPOT! 🎉";
  } else if (slot1 === slot2 || slot2 === slot3 || slot1 === slot3) {
    resultDisplay.textContent = "✨ Nice Match! ✨";
  } else {
    resultDisplay.textContent = "😿 Try Again!";
  }
}

spinButton.addEventListener("click", spinSlots);