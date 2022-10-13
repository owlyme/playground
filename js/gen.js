function *foo() {
    yield 1;
    yield 2;
    yield 3;
    

}

function *bar() {
    var x = foo()
    console.log(x)
    return 'bar'
}

var res = bar()
console.log(res)

console.log(res.next())
console.log(res.next())
console.log(res.next())
console.log(res.next())