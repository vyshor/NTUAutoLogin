const vid_src = document.getElementsByClassName('vjs-tech')[0].src;
const vid_name = document.getElementsByClassName('zm-tooltip topic')[0].innerHTML;
var download_video_link = document.createElement("a");
download_video_link.href= vid_src;
download_video_link.setAttribute("download", vid_name + ".mp4");
var download_video_btn = document.createElement("btn");
download_video_btn.style = "background-color: rgb(0, 140, 186); border: none; color: white; padding: 15px 32px; margin-right: 40px; margin-bottom: 100px; text-align: center; text-decoration: none; font-size: 16px; cursor: pointer;";
download_video_btn.innerHTML = "Download video";
download_video_link.appendChild(download_video_btn);

for (const el of document.getElementsByTagName("script")) {
    if (el.innerHTML.search("transcriptUrl") !== -1) {
        eval(el.innerHTML);
    }
}
var download_transcript_link = document.createElement("a");
download_transcript_link.href= window.__data__.transcriptUrl;
var download_video_default_link = window.__data__.shareMp4Url;
if (download_video_default_link == null || download_video_default_link == "") {
    download_video_default_link = window.__data__.viewMp4Url;
}
const urlFileNameRegEx = /(?<=\/)[^\/\?#]+(?=[^\/]*$)/;
const file_name = urlFileNameRegEx.exec(download_video_default_link)[0].replace(".mp4", "");
download_transcript_link.setAttribute("download", file_name + ".vtt");
var download_transcript_btn = document.createElement("btn");
download_transcript_btn.style = "background-color: rgb(0, 140, 186); border: none; color: white1; padding: 15px 32px; text-align: center; text-decoration: none; font-size: 16px; cursor: pointer;";
download_transcript_btn.innerHTML = "Download transcript";
if (window.__data__.transcriptUrl !== '') {
    download_transcript_link.appendChild(download_transcript_btn);
}

var main_view = document.getElementsByClassName('main')[0];
main_view.insertBefore(download_transcript_link, main_view.firstChild);
main_view.insertBefore(download_video_link, main_view.firstChild);
