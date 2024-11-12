//////// video loading //////////////////////////////////////////////////////////////////////
let queue;
function loadingVideo(v, src) {
    queue = new createjs.LoadQueue(false);

    enableInlineVideo(v);
    v.pause();
    queue.on("complete", function (evt) { handleCompleteVid(evt, v) });
    queue.loadFile({ id: 'mp4', src: src, type: createjs.Types.BINARY });
    queue.load();
}

function handleCompleteVid(evt, v) {
    let vidTmp = queue.getResult('mp4');
    let blob = new Blob([vidTmp], { type: "video/mp4" });
    let urlCreator = window.URL || window.webkitURL;
    v.src = urlCreator.createObjectURL(blob);

    loadedVideos++;
    if (loadedVideos == 1) {
        loaded('video1');
    }
    else {
        loaded('video2');
    }
}

////////// control video playing when tab browser change ///////////////////////////////////////////////
function viewTab(vid) {
    if (!vid || typeof vid.pause !== 'function' || typeof vid.play !== 'function') {
        return;
    }

    if (typeof checkTime === 'undefined' || typeof checkTime.endVid === 'undefined') {
        return;
    }

    document.addEventListener("visibilitychange", function () {
        try {
            if (document.hidden) {
                if (checkTime.endVid === 0) vid.pause();
            } else {
                if (checkTime.endVid === 0) {
                    vid.play();
                } else {
                    // This avoids Safari showing a blank image instead of the last frame of the video
                    vid.currentTime = vid.duration - 0.03;
                }
            }
        } catch (error) {
            console.error("An error occurred during visibility change handling:", error);
        }
    });
}

////// checkVideoTime object ///////////////////////////////////////////////////////////////////////////////////
/*
    vidObj          => the video object to checked
    times           => an array of times when we wish to trigger some function
    functionRecall  => an array of function to recall when the video is at the right time. Inside the array is better to use function(){}
 */
let checkVideoTime = function (vidObj, times, functionRecall) {
    this.errors = [];
    this.vidObj = vidObj;
    this.times = [];
    this.functionRecall = []
    this.timesChecked = [];
    this.endVid = 0;

    if (Array.isArray(times)) {
        this.times = times;
        for (let c = 0; c < times.length; c++) {
            this.timesChecked.push(0);
        }
    }
    else this.errors.push(".. 2nd parameter has to be an array");

    if (Array.isArray(functionRecall)) this.functionRecall = functionRecall;
    else this.errors.push(".. 3rd parameter has to be an array of functions")

    if (this.errors.length > 0) {
        console.log("checkVideoTime errors:");
        for (let i = 0; i < this.errors.length; i++) {
            console.log(this.errors[i]);
        }
    } else {
        //if there is no error, the event listener start
        this.vidObj.addEventListener("timeupdate", (e) => {
            this.checkTheTimes(e, this.times, this.timesChecked, this.functionRecall);
        });
    }
    this.checkTheTimes = function (evt, timesTmp, checker, functionRec) {
        //check of the times
        for (let c = 0; c < timesTmp.length; c++) {
            if (evt.target.currentTime >= timesTmp[c] && checker[c] === 0) {
                checker[c] = 1;
                functionRec[c]();
            }
            if ((evt.target.currentTime >= (evt.target.duration - 0.03)) && this.endVid !== 1) {
                evt.target.pause();
                this.endVid = 1;
            }
        }
    }
}