/**
 * Created by Administrator on 2017/3/28 0028.
 * source from siwuxie095
 */
var canvas = document.getElementById('dom');
var context = canvas.getContext('2d');
var height = context.canvas.height;
var width = context.canvas.width;
var r = width / 2;
var rem = width/200;

//鏃堕挓鑳屾櫙
function drawBackground() {
    context.save();
    context.translate(r, r);
    context.beginPath();
    context.lineWidth = 8*rem;
    context.strokeStyle = "#000"
    context.arc(0, 0, r - 5*rem, 0, 2 * Math.PI, false);
    context.stroke();
    context.closePath();
//閬嶅巻灏忔椂鏁�
    var houseNumble = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
    houseNumble.forEach(function (number, i) {
        context.textAlign = 'center';
        context.textBaseline = 'middle'
        context.font = 18*rem+'px Arial'
        var rad = 2 * Math.PI / 12 * i;
        var x = Math.cos(rad) * (r - 30*rem);
        var y = Math.sin(rad) * (r - 30*rem);
        context.fillText(number, x, y);
    })
//瀹氫箟鍒诲害
    for (var i = 0; i < 60; i++) {
        var rad = 2 * Math.PI / 60 * i;
        var x = Math.cos(rad) * (r - 18*rem);
        var y = Math.sin(rad) * (r - 18*rem);
        context.beginPath();
        if (i % 5 == 0) {
            context.fillStyle = "#000"
            context.arc(x, y, 2*rem, 0, 2 * Math.PI);
        } else {
            context.fillStyle = "#ccc"
            context.arc(x, y, 2*rem, 0, 2 * Math.PI);
        }

        context.fill();
        context.closePath();
    }
}
//瀹氫箟鏃堕拡
function drawHour(hour,minute) {
    context.save();
    context.beginPath();
    context.lineWidth = 6*rem;
    context.lineCap = 'round'
    var rad = 2 * Math.PI / 12 * hour;
    var mrad = 2* Math.PI/12/60 * minute;
    context.rotate(rad+mrad);
    context.moveTo(0, 10*rem);
    context.lineTo(0, -r / 2);
    context.stroke();
    context.restore();
}
//瀹氫箟鍒嗛拡
function drawMinute(minute) {
    context.save();
    context.beginPath();
    context.lineWidth = 3*rem;
    context.lineCap = 'round';
    var rad = 2 * Math.PI / 60 * minute;
    context.rotate(rad);
    context.moveTo(0, 15*rem);
    context.lineTo(0, -r + 34)
    context.stroke();
    context.restore();
}
//瀹氫箟绉掗挓
function drawSecond(second) {
    context.save();
    context.beginPath();
    context.lineWidth = 2*rem;
    context.lineCap = 'round';
    context.fillStyle = "red"
    var rad = 2 * Math.PI / 60 * second;
    context.rotate(rad);
    context.moveTo(-2 ,20);
    context.lineTo( 2, 20);
    context.lineTo( 1, -r + 18);
    context.lineTo( -1, -r + 18);
    context.fill();
    context.restore();
}
//鐢讳腑蹇冪偣
function drawDot() {
    context.beginPath();
    context.fillStyle = "#fff"
    context.arc(0, 0, 4*rem, 0, 2 * Math.PI, false);
    context.fill();
}
//鏃堕棿鍑芥暟锛岃鏃堕挓鏍规嵁褰撳墠鏃堕棿璺冲姩
function Draw() {
    context.clearRect(0,0,width,height);
    var time= new Date();
    var hour =time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    drawBackground();
    drawHour(hour,minute);
    drawMinute(minute);
    drawSecond(second);
    drawDot();
    context.restore()
}

Draw();
setInterval(Draw,1000);
