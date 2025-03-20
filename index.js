function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    let reply;
    switch (string) {
        case string.toLowerCase():
            reply = "I can't hear you!";
            break;

        case string.toUpperCase():
            reply = "YES INDEED!"
            break;

        case "Let's have dinner together!":
            reply = "I would love to!";
            break;
    }
    return reply;
}

console.log(sayHiToHeadphonedRoommate("let's have dinner together!"))