var x = document.querySelectorAll('td > input');
console.log(x);

x.forEach(function(i,obj) {
obj.addEventListener("change",abcd,false);
});

function abcd(e) {
var p = e.currentTarget;
console.log(p.value);
}
