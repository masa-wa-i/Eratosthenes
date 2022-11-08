var o = document.getElementById("num");
var s = document.getElementById("wa");
var z = document.getElementById("btn").disabled;
o.disabled = false;
function a() {
  z = true;
  o.disabled = true;
  var p = [];
  const w = parseInt(o.value, 10);
  if (w >= 0) {
    s.innerHTML = "";
    for (var i = 1; i <= w; i++) {
      p.push(i);
    }
    for (var e = 1; e <= w - 1; e++) {
      for (var f = 2; p[e] * f <= w; f++) {
        b = p.indexOf(p[e] * f);
        if (b != -1) {
          p.splice(b, 1);
        }
      }
    }
    p.splice(0, 1);
    s.innerHTML = p.join("<br>");
    o.disabled = false;
    z = false;
  } else {
    s.innerHTML = "your brain is bad";
    o.disabled = false;
    z = false;
  }
}
