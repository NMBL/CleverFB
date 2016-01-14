document.getElementById("toggle").addEventListener("click", function () {
    chrome.tabs.executeScript(null, {file: "jquery.min.js"}, function () {
        chrome.tabs.executeScript(null, {file: "cleverbot.io.min.js"},function(){
            chrome.tabs.executeScript(null, {file: "bot.js"});
        });
    });
});
