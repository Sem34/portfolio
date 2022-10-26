//TEXT google
let typed = new Typed('#typed', { // Тут id того блока, в которм будет анимация
    stringsElement: '#typed-strings', // Тут id блока из которого берем строки для анимации
    typeSpeed: 100, // Скорость печати
    startDelay: 1500, // Задержка перед стартом анимации
    backSpeed: 50, // Скорость удаления
    loop: true // Указываем, повторять ли анимацию
});
// string header 
function animate(id) {
    var node = document.getElementById(id).childNodes[0];
    var text = node.data;
    setInterval(function () {
        text = text.substring(1) + text[0];
        node.data = text;
    }, 125); //интервал прокрутки, мс
}
window.addEventListener('load', function (e) { animate('marqueeline'); }, false);
//RUN MOUSE
window.addEventListener('load', function () {
    var O = document.getElementById('obj'),
        X = 0,
        Y = 0, mouseX = 0, mouseY = 0;
    window.addEventListener('mousemove', function (ev) {
        ev = window.event || ev;
        X = ev.pageX;
        Y = ev.pageY;
    });

    function move() {
        var p = 'px';
        console.log(X, Y);
        O.style.left = X + p;
        O.style.top = Y + p;

        setTimeout(move, 100);
    }
    move();

});

//TagCLOud
var texts = [
    'HTML', 'CSS', 'Javascript',
    'SCSS', 'LESS', 'Git',
    'БЭМ',
];
var tc = TagCloud('.content', texts);
console.log(tc);
