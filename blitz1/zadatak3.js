a= [321, 63, "Mermelada", 4, "Kruh", 1, 1234, "tanjur", 50]
function sortiraj(a){
b = a.sort((a,b) => a.length - b.length)
b.sort()

console.log(b)

}
sortiraj(a)