var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Initializing variables
const releasedDateBox = document.getElementById("releasedDateBox");
// Limit the date picker so the user can choose only past dates.
const dateOfToday = new Date();
releasedDateBox.setAttribute("max", `${dateOfToday.getFullYear()}-${dateOfToday.getMonth() + 1}-${dateOfToday.getDate()}`);
// Set the BPM's slider input to it's minimum value (80).
document.getElementById("bpmBox").setAttribute("value", "80");
showRangeValue();
// Process the from's values and get the predicted streams of the song.
function getResult(event) {
    return __awaiter(this, void 0, void 0, function* () {
        // Starting a spinner-like paragraph while waiting for result.
        const para = document.getElementById("resultPara");
        para.innerText = "Calculating.";
        let waitingStringCount = 1;
        const waitingString = window.setInterval(() => {
            if (waitingStringCount < 7) {
                para.innerText += ".";
                waitingStringCount++;
            }
            else {
                para.innerText = "Calculating";
                waitingStringCount = 1;
            }
        }, 500);
        // The result value which will be shown at the end of the processing.
        let predictedStreams = "";
        // Creating the object to send with the request.
        const trackName = document.getElementById("trackNameBox").value;
        const artistName = document.getElementById("artistNameBox").value;
        const artistCount = document.getElementById("artistCountBox").value;
        const releasedDate = new Date(document.getElementById("releasedDateBox").value);
        const inSpotifyPlaylists = document.getElementById("inSpotifyPlaylistsBox").value;
        const inSpotifyCharts = document.getElementById("inSpotifyChartsBox").value;
        const inApplePlaylists = document.getElementById("inApplePlaylistsBox").value;
        const inAppleCharts = document.getElementById("inAppleChartsBox").getAttribute("checked");
        const playlistAdds = document.getElementById("playlistAddsBox").value;
        const bpm = document.getElementById("bpmBox").value;
        const key = document.getElementById("keyBox").value;
        const mode = document.getElementById("modeBox").value;
        const danceability = document.getElementById("danceabilityBox").value;
        const valence = document.getElementById("valenceBox").value;
        const energy = document.getElementById("energyBox").value;
        const acousticness = document.getElementById("acousticnessBox").value;
        const instrumentalness = document.getElementById("instrumentalnessBox").value;
        const liveness = document.getElementById("livenessBox").value;
        const speechiness = document.getElementById("speechinessBox").value;
        // para.innerText = `The predicted amount of streams for the song "${trackName}" by "${artistName}" might be: ${predictedStreams}`;
        // Imitates the time for the response to be sent.
        setTimeout(() => window.clearInterval(waitingString), 20000);
        // console.log(releasedDate.getFullYear(), releasedDate.getMonth() + 1, releasedDate.getDate());
        // Prevent the form from refreshing the page.
        event.preventDefault();
    });
}
// Shows the current value of the BPM's input. 
function showRangeValue() {
    const bpm = document.getElementById("bpmBox").value;
    const bpmValSpan = document.getElementById("bpmValSpan");
    bpmValSpan.innerText = bpm;
}
// Make the checkboxes values into 1 or 0.
function changeCheckboxValue(inputElem) {
    inputElem.value = inputElem.value === "on" || inputElem.value === "0" ? "1" : "0";
}
