/*var foo = {
    bar: 'baz'
};

var foo2 = Object.create(Object.prototype, {


    bar: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 'baz'
    }

});

console.log(foo.bar);
console.log(foo2.bar);*/


var foz = new Object();
var boz = {};

console.log(typeof(foz));
console.log(typeof(boz));

/*    window.Object = function(){
    arguments.callee.call();

}
*/
//        var foz = new Object();

    function foo() {

    }

    foo.prototype.sayHi = window.alert;


    //foo.alert("hee");
