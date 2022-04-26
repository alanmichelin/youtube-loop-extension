
// const start = document.getElementById('start')
// const end = document.getElementById('end')

// async function getCurrentTab() {
//   let queryOptions = { active: true, currentWindow: true };
//   let [tab] = await chrome.tabs.query(queryOptions);
//   return tab;
// }
// console.log(getCurrentTab());
// const handleClick = () =>{
//   console.log(start.value,end.value)
//   const video = document.querySelector("video");


// }

function reddenPage() {
  const video = document.querySelector("video");
    console.log(video)
  const loop = () =>{
    if(video.currentTime > 75){
        video.currentTime = 60
    }
    console.log(video.currentTime)
  }
  let interval = setInterval(loop, 3000)
}

chrome.action.onClicked.addListener((tab) => {
  if(tab.url.includes("youtube")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: reddenPage
    });
  }
});

//   const video = window.document.querySelector("video");
//   console.log(video)
// const loop = () =>{
//   if(video.currentTime > 75){
//       video.currentTime = 60
//   }
//   console.log(video.currentTime)
// }
// let interval = setInterval(loop, 3000)
// clearInterval(interval)
// "permissions": [
//     "tabs",
//     "bookmarks",
//     "scripting",
//     "storage"
//     ],

// {
//   "name": "Youtube loop",
//   "description": "Simple youtube looper",
//   "version": "1.0",
//   "manifest_version": 3,
//   "background": {
//     "service_worker": "background.js"
//   },
//   "permissions": ["storage", "activeTab", "scripting"],
//   "action": {
//       "default_popup": "popup.html"
//     },
//     "options_page": "options.html"

// }