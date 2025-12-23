// ==========================
// Animated Text
// ==========================
const textElement = document.querySelector('.multiple-text');
const texts = ["Be Safe", "Drive Carefully", "Your Safety Matters"];
let index = 0;

function typeText() {
    const currentText = texts[index];
    let letterIndex = 0;
    textElement.textContent = "";

    function typeLetter() {
        if (letterIndex < currentText.length) {
            textElement.textContent += currentText.charAt(letterIndex);
            letterIndex++;
            setTimeout(typeLetter, 100);
        } else {
            setTimeout(() => {
                index = (index + 1) % texts.length;
                typeText();
            }, 2000);
        }
    }

    typeLetter();
}

typeText();

// ==========================
// Smooth Scroll
// ==========================
document.getElementById('prediction-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('prediction').scrollIntoView({ behavior: 'smooth' });
});

// ==========================
// Accident Risk Prediction
// ==========================
document.getElementById("prediction-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const speed = parseInt(document.getElementById("speed").value);
    const weather = document.getElementById("weather").value;
    const road = document.getElementById("road").value;

    let riskScore = 0;

    // Speed factor
    if (speed > 80) riskScore += 3;
    else if (speed > 50) riskScore += 2;
    else riskScore += 1;

    // Weather factor
    if (weather === "rain") riskScore += 2;
    if (weather === "fog") riskScore += 3;

    // Road factor
    if (road === "wet") riskScore += 2;
    if (road === "poor") riskScore += 3;

    // Convert score to percentage
    let riskPercent = Math.min(Math.round((riskScore / 9) * 100), 100);

    // Determine risk level
    let resultText = "";
    let color = "";

    if (riskPercent <= 40) {
        resultText = `Low Accident Risk 🟢 (${riskPercent}%)`;
        color = "green";
    } else if (riskPercent <= 70) {
        resultText = `Medium Accident Risk 🟡 (${riskPercent}%)`;
        color = "orange";
    } else {
        resultText = `High Accident Risk 🔴 (${riskPercent}%)`;
        color = "red";
    }

    const result = document.getElementById("result");
    result.textContent = resultText;
    result.style.color = color;
});
