// scripts.js


function drawTree(level) {

for (var i = 0; i <= level; i++ ) {

  var star = '';

  for (var j = 0;  j <= i; j++) {

    star += '*';

  }
  //console.log(star);
  console.log("%c%s","font-size: 20px; color: green", star);
}
}
drawTree(10);
