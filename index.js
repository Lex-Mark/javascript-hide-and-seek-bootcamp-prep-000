function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  var terlst = document.querySelector('#nested').querySelector('.target')
  //for (let i = 0; i < lerlst.length; i++) {
  //lerlst[i].innerHTML = lerlst[i].innerHTML+ ' .target';
//}
console.log(terlst);
return terlst;
}

function deepestChild() {
const lis = document.querySelectorAll('div#grand-node')
var len = 0;
 len = lis.length-1;
 return lis[len];
}

function increaseRankBy(n) {
const lis = document.querySelectorAll('.ranked-list li')
var curN = 0;
for (let i = 0; i < lis.length; i++) {
  curN = parseInt(lis[i].innerHTML,10);
  lis[i].innerHTML = (curN + n).toString()
}
}
