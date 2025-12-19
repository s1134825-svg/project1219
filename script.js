let i = 0,
  imgArr = new Array();

imgArr[0] =
  "https://images.chinatimes.com/newsphoto/2025-02-24/1024/20250224002416.jpg";
imgArr[1] =
  "https://hips.hearstapps.com/hmg-prod/images/domestic-gray-tabby-cat-with-an-orange-nose-is-royalty-free-image-1686039395.jpg?crop=0.668xw:1.00xh;0.264xw,0.jpg";
imgArr[2] =
  "https://blog.fluv.com/tw/wp-content/uploads/sites/2/2023/08/%E6%9C%AA%E5%91%BD%E5%90%8D%E8%A8%AD%E8%A8%88-9-809x455.png";

function showImg() {
  document.getElementById("ico").src = imgArr[i];
  i = (i + 1) % 3;
}

function show() {
  setInterval(showImg, 2000);
}