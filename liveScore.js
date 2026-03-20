async function loadMatch() {
  try {
    const res = await fetch("https://api.cricapi.com/v1/currentMatches?apikey=ef4cc5eb-5b99-4720-8d94-3049f0862a77");
    const data = await res.json();

    if (data.status !== "success") {
      document.getElementById("liveScore").innerHTML = "API limit reached. Try later.";
      return;
    }

    const match = data.data[0];

    document.getElementById("liveScore").innerHTML =
      `${match.name} - ${match.status}`;

  } catch (error) {
    document.getElementById("liveScore").innerHTML = "Live score unavailable";
  }
}

// 🔁 Call once only
loadMatch();

// ⏱ Refresh every 60 seconds (NOT faster)
setInterval(loadMatch, 60000);