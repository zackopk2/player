function playVideo() {
  var videoUrl = document.getElementById("videoInput").value;
  var videoPlayer = document.getElementById("videoPlayer");

  var source = document.createElement("source");
  source.setAttribute("src", videoUrl);
  videoPlayer.innerHTML = "";
  videoPlayer.appendChild(source);

  // Set the Referer header for the video request
  var xhr = new XMLHttpRequest();
  xhr.open("GET", videoUrl, true);
  xhr.setRequestHeader("Referer", "/referer=78373fa444d18cf962d99179d6621a64");
  xhr.send();
}
