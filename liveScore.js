async function loadMatch(){

try{

const res=await fetch("https://api.cricapi.com/v1/currentMatches?apikey=ef4cc5eb-5b99-4720-8d94-3049f0862a77");

const data=await res.json();

const match=data.data[0];

document.getElementById("liveScore").innerHTML=

`${match.name} - ${match.status}`;

}

catch{

document.getElementById("liveScore").innerHTML="Live score unavailable";

}

}

loadMatch();