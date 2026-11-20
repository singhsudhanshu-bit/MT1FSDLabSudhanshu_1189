//question 2
function memoize(fn) {
    let cache = {};
    return function(n) {
        if(n in cache) {
            return cache[n];
        }
        cache[n] = fn(n);
        return cache[n];
    };
}
function square(n) {
    return n*n;
}
let Square = memoize(square);
console.log(Square(5));
console.log(Square(5));