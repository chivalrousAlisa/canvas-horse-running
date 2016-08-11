// 定时器 切换马背景
$(function(){
  var imgIndex = 2;
  var m = $(".m");
  setInterval(function(){
    m.css("backgroundImage","url('img/xiaoma"+[imgIndex]+".png')");
    imgIndex = imgIndex > 12 ? 1 : ++ imgIndex;
  },20);
});

// canvas

$(function(){
  // 获得canvas
  var canvas = document.getElementById("canvas").getContext("2d");
  // 控制 马背景图
  var imgIndex = 1;
  // 初始化 背景图片
  var bgImg = new Image();
  bgImg.src = "123.png";
  bgImg.onload = function(){
    canvas.drawImage(bgImg, 0, 0,800,400);
    canvas.drawImage(bgImg,800,0,800,400);
  };
  // 初始化 马图片
  var m = new Image();
  m.src = "img/pic1.png";
  m.onload = function(){
    // 初始化 第一个马
    canvas.drawImage(m,0,290,80,61);
    // 初始化 第二个马
    canvas.drawImage(m,0,320,80,61);
  };
  // 定时器任务 绘制图片
  var setImg = function(){
    moveBg();
    moveM();
    moveM1();
  };
  // 控制 背景移动
  var bgSpeed = 0;
  // 移动背景图片
  var moveBg = function(){
    canvas.drawImage(bgImg, 0 - bgSpeed, 0,800,400);
    canvas.drawImage(bgImg,800 -bgSpeed,0,800,400);
    bgSpeed = bgSpeed > 800 ? 1 : bgSpeed += 5;
  };
  // 移动 马
  var mSpeed = 800;
  var moveM = function(){
    var m = new Image();
    m.src = "img/xiaoma"+imgIndex+".png";
    canvas.drawImage(m,0 + mSpeed,290,80,61);
    imgIndex = imgIndex > 12 ? 1 : ++ imgIndex;
    if(mSpeed > 360){
      //return;
    }
    mSpeed = mSpeed < 0 ? 800 : mSpeed -= 3 || Math.floor(Math.random()*6);
  };
  // 移动 马1
  var mSpeed1 = 800;
  var moveM1 = function(){
    var m = new Image();
    m.src = "img/xiaoma"+imgIndex+".png";
    canvas.drawImage(m,0 + mSpeed1,320,80,61);
    imgIndex = imgIndex > 12 ? 1 : ++ imgIndex;
    mSpeed1 = mSpeed1 < 0 ? 800 : mSpeed1 -= 5;
  };
  //背景图片 定时器
  setInterval(setImg,30);
});
