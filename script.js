function generateBio() {

    const name = document.getElementById("name").value.trim();
    const profession = document.getElementById("profession").value.trim();
    const hobbies = document.getElementById("hobbies").value.trim();
    const platform = document.getElementById("platform").value;
    const tone = document.getElementById("tone").value;

    const resultBox = document.getElementById("result");
    const loadingBox = document.getElementById("loading");
    const counterBox = document.getElementById("counter");

    if (!name || !profession || !hobbies) {
        resultBox.innerHTML = "❌ Please fill all fields.";
        return;
    }

    loadingBox.innerHTML = "⏳ Generating AI Bio...";
    resultBox.innerHTML = "";
    counterBox.innerHTML = "";

    try {

        let bio = "";

        if (tone === "Professional") {
            bio = `I am ${name}, a ${profession} with a strong interest in ${hobbies}. I focus on building impactful and meaningful work suitable for ${platform}.`;
        }

        else if (tone === "Friendly") {
            bio = `Hi! I'm ${name} 😊 a ${profession} who loves ${hobbies}. Always excited to connect and share ideas on ${platform}!`;
        }

        else if (tone === "Creative") {
            bio = `${name} is a ${profession} weaving creativity through ${hobbies}, crafting unique experiences on ${platform}.`;
        }

        else if (tone === "Funny") {
            bio = `Hey! I'm ${name}, a ${profession} who enjoys ${hobbies} 😄 I try to be serious... but ${platform} keeps distracting me!`;
        }

        else {
            bio = `Hi, I'm ${name}, a ${profession} interested in ${hobbies}.`;
        }

        // simulate AI delay
        setTimeout(() => {

            resultBox.innerText = bio;
            counterBox.innerText = `Characters: ${bio.length}`;
            loadingBox.innerHTML = "";

        }, 800);

    } catch (error) {

        console.error(error);

        loadingBox.innerHTML = "";

        const fallbackBio =
            `Hi, I'm ${name}, a ${profession} who enjoys ${hobbies} and builds experiences for ${platform}.`;

        resultBox.innerText = fallbackBio + "\n\n⚠️ Fallback mode used";
        counterBox.innerText = `Characters: ${fallbackBio.length}`;
    }
}


// 📋 Copy Button
document.getElementById("copyBtn").addEventListener("click", () => {

    const text = document.getElementById("result").innerText;

    if (!text) {
        alert("Generate a bio first.");
        return;
    }

    navigator.clipboard.writeText(text);
    alert("✅ Bio copied!");
});


// 🧹 Clear form
function clearForm() {

    document.getElementById("name").value = "";
    document.getElementById("profession").value = "";
    document.getElementById("hobbies").value = "";

    document.getElementById("platform").selectedIndex = 0;
    document.getElementById("tone").selectedIndex = 0;

    document.getElementById("result").innerHTML = "";
    document.getElementById("counter").innerHTML = "";
    document.getElementById("loading").innerHTML = "";
}