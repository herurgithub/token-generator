document.getElementById("generateBtn").addEventListener("click", function () {
  const blueTokens = parseInt(document.getElementById("blueTokens").value) || 0;  // blue tokens defaulting to 0 if empty
  const bluePrefix = document.getElementById("bluePrefix").value || "";          //blue tokens prefix defaulting to empty string if ntg entered
  const bluePerRow = parseInt(document.getElementById("bluePerRow").value) || 1; //blue tokens per row, defaulting to 1 if empty

  const redTokens = parseInt(document.getElementById("redTokens").value) || 0;   // red tokens defaulting to 0 if empty
  const redPrefix = document.getElementById("redPrefix").value || "";           //red tokens prefix defaulting to empty string if ntg entered
  const redPerRow = parseInt(document.getElementById("redPerRow").value) || 1;  //red tokens per row, defaulting to 1 if empty


  // Check for invalid prefixes (no spaces or special characters)
  const prefixPattern = /^[A-Za-z0-9]*$/; // Allows only letters and numbers
  if (!prefixPattern.test(bluePrefix) || !prefixPattern.test(redPrefix)) {
    alert("Prefixes should only contain letters and numbers (no spaces or special characters)");
    return; // Stops the function if prefixes are invalid
  }

  // Check if both token counts are zero
  if (blueTokens === 0 && redTokens === 0) {
    alert("Please enter a number greater than 0 for either blue or red tokens.");
    return; // Stop the function if no tokens are requested
  }

    // Check for valid tokens per row
  if (bluePerRow <= 0 && redPerRow <= 0) {
    alert("Tokens per row must be greater than zero.");
    return; // Stops the function
  }


  const tokenDisplay = document.getElementById("tokenDisplay");
  tokenDisplay.innerHTML = ""; // Clear previous tokens

  // Generate blue tokens
  for (let i = 0; i < blueTokens; i++) {
    if (i % bluePerRow === 0) {
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("token-row");
      tokenDisplay.appendChild(rowDiv);
    }
    // Creating individual blue token
    const token = document.createElement("div");
    token.classList.add("token", "blue-token");
    token.textContent = `${bluePrefix}${i + 1}`;
    tokenDisplay.lastChild.appendChild(token);
  }

  // Generate red tokens
  for (let i = 0; i < redTokens; i++) {
    if (i % redPerRow === 0) {
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("token-row");
      tokenDisplay.appendChild(rowDiv);
    }
    // Creating individual red token
    const token = document.createElement("div");
    token.classList.add("token", "red-token");
    token.textContent = `${redPrefix}${i + 1}`;
    tokenDisplay.lastChild.appendChild(token);
  }
});

document.getElementById("clearBtn").addEventListener("click", function () {
  document.getElementById("tokenForm").reset();            // Reset and empty all input fields
  document.getElementById("tokenDisplay").innerHTML = "";   // Clear all tokens from display
});
