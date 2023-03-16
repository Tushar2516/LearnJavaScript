let a = prompt("Hey what's your age")
// console.log(typeof a)
a = Number.parseInt(a)
console.log(typeof a)
if (a < 0) {
  alert("this is an invalid")
}
else if (a < 9) {
  alert("You are a KID")
}
else if (a < 18 && a >= 9) {
  alert("You are a kid you can drive after 18")
}
else {
  alert("this is  an valid")
}
console.log("Done")

age = prompt("Enter your age")
console.log("You Can", age <18 ? "Not Drive" : "Drive" )