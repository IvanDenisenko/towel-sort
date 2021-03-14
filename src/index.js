
// You should implement your task here.

module.exports = function towelSort (a) {
  let b = [];
if (a === undefined) return [];
if (a.length === 0) return [];
for (let i = 0; i< a.length; i++){
if(i%2 != 0){

for (let j =a[i].length-1; j>=0; j--){
  if (a[i][j] == undefined) {
    a.pop();
  }
b.push(a[i][j]);
}
}
else {for (let j = 0; j< a[i].length; j++){
  if (a[i][j] == undefined) {
    a.pop();
  }
b.push(a[i][j]);
}
     }}
return b
}

