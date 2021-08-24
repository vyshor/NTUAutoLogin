document.addEventListener('DOMContentLoaded', function () {

    // const bg = chrome.extension.getBackgroundPage();
    // const vid_src = bg.getElementById('Video1_html5_api').src;
    // bg.console.log(vid_src);
    // Object.keys(bg.bears).forEach(function(url) {
    //     const div = document.createElement('div');
    //     div.textContent = `${url}: ${bg.bears[url]}`;
    //     document.body.appendChild(div);
    // })

    // document.querySelector('button').addEventListener('click',
    //     onclick, false);

    function onclick() {
        chrome.tabs.query({currentWindow: true, active: true},
            function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, 'Save NTu Video', saveVideo)
            })
    }

    function saveVideo(vid_info){
        const options = {"url":vid_info.vid_src, "conflictAction": "uniquify", "filename": vid_info.vid_name.replace(/\//g, ' ').replace(/:/g, ' ') + '.mp4'};
        chrome.downloads.download(options,function(downloadId){
            console.log("download begin, the downId is:" + downloadId);
        });
    }
    onclick()
    //
    // function setCount(res){
    //     const div = document.createElement('div');
    //     div.textContent = `${res.count} bears`;
    //     document.body.appendChild(div)
    // }
}, false);
