var PollingRate = 2000;
//Script to be injected into web page (to simulate pressing <enter> key)
var s = document.createElement('script');
s.src = chrome.extension.getURL('pressEnter.js');

//Bot Toggling Mechanism
if (typeof flag === 'undefined') {
    console.log("first time");
    var flag=false;
    alert("Turned On");
    init();
    runBot();
}else{
    if(!flag){
        alert("Turned Off");
        console.log("stopped");
        flag=true;
    }else{
        alert("Turned On");
        console.log("started");
        flag=false;
        runBot();
    }
}

var bot;

//Initialization of bot
function init(){
    console.log("initialized");

    bot = new cleverbot('7Wzh9zxRL9NFrxAU', '3e5V7BKeZByaX4bdW3YIzOef7QNeL9Kf');
    bot.setNick("Hello");
}

//Bot
function runBot(){
    console.log("bot started!");
    bot.create(function (err, session) {
        //using variable "state" to prevent bot from answering next question before previous (or) re-answering an unanswered question
        var state=0;
        var x = setInterval(function () {
            if(state==0){
                console.log("Checking for new messages");
                var p = document.getElementsByClassName("uiTextareaAutogrow _552m");
                var o = document.getElementsByClassName("\_5wd9");
                var chatBox = p[p.length - 1];
                if(flag==true)clearInterval(x);
                if (chatBox.value == "" && document.getElementsByClassName("_5wd4")[document.getElementsByClassName("_5wd4").length - 1].classList.contains("_1nc7") &&  document.getElementsByClassName("_5wd4")[document.getElementsByClassName("_5wd4").length - 1].classList.contains("direction_ltr")){
                    state=1;
                    console.log("He/She responded");
                    var usr = o[o.length - 1].innerText.toString();
                    bot.ask(usr, function (err, response) {
                        chatBox.value = response;
                        console.log("still happening");
                        (document.head || document.documentElement).appendChild(s);
                        state=0;
                    });
                }
            }

        }, PollingRate);
    });
}
