let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/title-image.png') {
      myImage.setAttribute('src','images/journey2.png');
    } else {
      myImage.setAttribute('src','images/title-image.png');
    }
}