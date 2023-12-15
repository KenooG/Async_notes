

function foo(){
    Promise.resolve().then(() => console.log(1))

    setTimeout(() => {console.log(2)})

    Promise.resolve().then(() => console.log(3))

    console.log(4)

}

foo()

console.log(5)


