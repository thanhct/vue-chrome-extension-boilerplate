import './index.styl'

console.log('Content script working...')

chrome.runtime.onMessage.addListener((msg, sender, response) => {
    console.log(msg)
    // console.log(sender)
    // console.log(response)
    if(msg.command == 'runCommands') {
        var scapeObj = msg.data
        // console.log('hello ' + scapeObj)
        var buyNowBtn = document.getElementsByClassName("content--2wNiw")[0];
        console.log('btn: ' + buyNowBtn);
        // buyNowBtn.click();
    }
});

setInterval(() => {
    // const val = $(`[class^="fourRoads"]`)
    //   .first()
    //   .html();
    var d = new Date();
    var buyNowBtn = document.getElementsByClassName("content--2wNiw")[0];
    console.log(buyNowBtn);
    if (buyNowBtn) {
      chrome.runtime.sendMessage({
        type: 'Roads',
        data: d.getTime(),
        road: buyNowBtn
      }, function (response) {
        console.log('response ' + response)
      });
    }
  }, 5000);