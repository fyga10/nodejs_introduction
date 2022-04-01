function parameter(p){
    var index = process.argv.indexOf(p);
    return process.argv[index + 1];
//console.log(index);
}
var nombre = parameter('--nombre');
var edad = parameter("--edad")
console.log(`Tu nombre es ${nombre} y tienes ${edad} años`);