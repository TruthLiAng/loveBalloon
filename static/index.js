window.addEventListener("load", () => {
    new Container(config.wish, config.time, config.texts);
});

function Container(wish, time, texts) {
    this.passedSeconds = 0;
    this.finalText = wish;
    this.beginDate = time
    this.texts = texts

    this.renderTexts(this.texts);
    document.querySelector('.pass-time .finalText').innerHTML = this.finalText;
    setInterval(() => {
        this.passedSeconds = Math.ceil((+ new Date() - new Date(this.beginDate).getTime()) / 1000);
        let list = ['days', 'hours', 'minutes', 'seconds'];

        list.forEach(item => {
            document.querySelector(`.pass-time .${item}`).innerHTML = this[item]();
        })
    }, 1000);
}

Container.prototype = {
    renderTexts(texts) {
        var oDiv = document.getElementById("marqueeDiv");
        var html = '';
        html += '<marquee id="marquee" direction = "up" scrollamount="2" style="color:white; height:100px;line-height: 20px;font-size:12px;text-align: center;">';
      
        let div = document.createElement("div");
        texts.forEach(item => {
            let d = document.createElement("div");
            d.innerHTML = item;
            div.appendChild(d);
        })
        html+=div.innerHTML
        html += '</marquee>';
        oDiv.innerHTML =html;
    },
    finalText() {
        return this.text || "";
    },
    beginDate() {
        return this.time;
    },
    days: function () {
        if (this.passedSeconds === 0) return "";
        return Math.floor(this.passedSeconds / (3600 * 24));
    },
    hours: function () {
        if (this.passedSeconds === 0) return "";
        return Math.floor(this.passedSeconds / 3600) % 24;
    },
    minutes: function () {
        if (this.passedSeconds === 0) return "";
        return Math.floor(this.passedSeconds / 60) % 60;
    },
    seconds: function () {
        if (this.passedSeconds === 0) return "";
        return this.passedSeconds % 60;
    },
};

function fillMarqueeData(){
    var oDiv = document.getElementById("marqueeDiv");
    var html = '';
    html += '<marquee id="marquee" direction = "up" scrollamount="2" style="color:white; height:100px;line-height: 20px;font-size:12px;text-align: center;">';
    html += '<span>系统通知2：</span>';
    html += '<span>';
    for(var i=0; i< data.length; i++){
        console.log(data[i]);
        html += '<a id="' + data[i].id + '">' + (i+1)+'. ' + data[i].title + '</a>';
    }
    html += '</span>';
    html += '</marquee>';

    oDiv.innerHTML = html;
}
