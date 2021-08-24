chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (document.getElementById('Video1_html5_api') != null) {
        const vid_src = document.getElementById('Video1_html5_api').src;
        const vid_name = document.getElementsByClassName('ellipsis')[0].innerHTML;
        const vid_info = {vid_src: vid_src, vid_name: vid_name};
        sendResponse(vid_info);
        // chrome.downloads.download({url:vid_src},function(downloadId){
        //     console.log("download begin, the downId is:" + downloadId);
        // });
    } else if (document.getElementById('Video1') != null) {
        const vid_src = document.getElementById('Video1').src;
        const vid_name = document.getElementById('tab_top_title').getElementsByTagName("b")[0].innerHTML;
        const vid_info = {vid_src: vid_src, vid_name: vid_name};
        sendResponse(vid_info);
    } else if (document.getElementsByClassName('vjs-tech')[0] != null) {
        const vid_src = document.getElementsByClassName('vjs-tech')[0].src;
        const vid_name = document.getElementById('recording-name').innerHTML;
        const vid_info = {vid_src: vid_src, vid_name: vid_name};
        sendResponse(vid_info);
    }
    // else if (document.getElementsByClassName('vjs-tech')[0] != null) {
    //     const vid_src = document.getElementsByClassName('vjs-tech')[0].src;
    //     const vid_name = document.getElementsByClassName('zm-tooltip topic')[0].innerHTML;
    //     const vid_info = {vid_src: vid_src, vid_name: vid_name}
    //     var download_video_link = document.createElement("a");
    //     download_video_link.setAttribute("download", "");
    //     download_video_link.href= vid_src;
    //     var download_video_btn = document.createElement("btn");
    //     download_video_btn.style = "background-color: rgb(0, 140, 186); border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; font-size: 16px; cursor: pointer;";
    //     download_video_btn.innerHTML = "Download video";
    //     download_video_link.appendChild(download_video_btn);
    //     var main_view = document.getElementsByClassName('main')[0];
    //     main_view.insertBefore(download_video_link, main_view.firstChild);
    //     window.open(vid_src, '_self');
    // }
});
