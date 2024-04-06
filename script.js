async function getMatchData() {
  try {
      const response = await fetch("https://api.cricapi.com/v1/currentMatches?apikey=399eeb29-53ea-44f7-90e6-74fa75108c19&offset=0");
      const responseData = await response.json();

      if (responseData.status !== "success") {
          console.error("API Error:", responseData.error);
          return;
      }

      const matchesList = responseData.data;

      if (!matchesList || matchesList.length === 0) {
          console.log("No matches found.");
          return;
      }

      const relevantData = matchesList.map(match => `${match.name}, ${match.status}`);

      console.log("Matches:", relevantData);

      const matchesElement = document.getElementById("matches");
      matchesElement.innerHTML = relevantData.map(match => `<li>${match}</li>`).join('');
  } catch (error) {
      console.error("Error fetching data:", error);
  }
}

getMatchData();




