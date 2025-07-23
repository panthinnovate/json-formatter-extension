document.getElementById("formatBtn").addEventListener("click", () => {
  const input = document.getElementById("jsonInput").value;
  const output = document.getElementById("output");
  try {
    const parsed = JSON.parse(input);
    const pretty = JSON.stringify(parsed, null, 2);
    output.textContent = pretty;
  } catch (err) {
    output.textContent = "❌ Invalid JSON: " + err.message;
  }
});

document.getElementById("copyBtn").addEventListener("click", () => {
  const output = document.getElementById("output");
  navigator.clipboard.writeText(output.textContent)
    .then(() => alert("Copied!"))
    .catch(() => alert("Failed to copy"));
});