const frameRate = 60;
const encodeType = "video/webm;codecs=vp8";

function download(chunks) {
    let blob = new Blob(chunks);
    let url = window.URL.createObjectURL(blob);
    let link = document.createElement("a");
    link.href = url;
    link.download = new Date().getTime() + ".webm";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    link.remove();
}

class VideoRecorder {
    constructor(videoElement) {
        this.frameId = null
        this.chunks = [];
        this.videoElement = videoElement
        this.videoWidth = 640;
        this.videoHeight = 360;

        this.createCanvas()
        this.createRecorder()
    }   
    createCanvas() {
        const canvas = document.createElement("CANVAS");
        const body = document.querySelector('body')
        canvas.width = this.videoWidth;
        canvas.height = this.videoHeight;
        canvas.style.display = 'none';
        body.append(canvas);

        const canvasContext = canvas.getContext("2d");
        canvasContext.fillStyle = "deepskyblue";
        canvasContext.fillRect(0, 0, this.videoWidth,   this.videoHeight);

        this.canvas = canvas;
        this.canvasContext = canvasContext;
    }

    createRecorder() {
        const stream = this.canvas.captureStream(frameRate);
        const encodeType = "video/webm;codecs=vp8";
        const recorder = new MediaRecorder(stream, {
            mimeType: encodeType
        });
        this.recorder = recorder;
        this.ondataavailable()
    }
    drawFrame= () => {
        console.log("drawFrame")
        const {videoElement, videoWidth, videoHeight, drawFrame} = this
        this.canvasContext.drawImage(videoElement, 0, 0, videoWidth, videoHeight);
        this.frameId = requestAnimationFrame(drawFrame);
    }
  
    ondataavailable() {
        this.recorder.ondataavailable = e => {
            this.chunks.push(e.data);
        };
    }

    start() {
        this.recorder.start(10);
        this.drawFrame();
    }

    stop() {
        this.recorder.stop();
        cancelAnimationFrame(this.frameId);
        download(this.chunks);
    }
}