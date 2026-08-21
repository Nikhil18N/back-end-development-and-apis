const { __esModule } = require("@babel/generator");

function isPrime(num) {
    if(num == 0 || num == 1) return false;

    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if(num % i == 0) return false;
    }

    return true;
}

module.exports = {
    isPrime,
} 