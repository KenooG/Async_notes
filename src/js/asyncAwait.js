// function *getData(){
//     const response = yield fetch('http://api.nbp.pl/api/exchangerates/rates/a/chf/');
//     console.log(response)
//
//
// }
//
//
// const gen = getData()
// gen.next().value.then((response) => gen.next(response))



async function getData(){
    const response = await fetch('http://api.nbp.pl/api/exchangerates/rates/a/chf/');
    console.log(response)

}


getData()


