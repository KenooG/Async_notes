const sqrRef = document.querySelector('.square')


function animate() {                  //callback hell

    setTimeout(() => {
        sqrRef.style.left = '300px';

        setTimeout(() => {
            sqrRef.style.top = '300px'

            setTimeout(() => {
                sqrRef.style.left = '0'

                setTimeout(() => {
                    sqrRef.style.top = '0'
                    animate()

                }, 2000)

            }, 2000)

        }, 2000)

    }, 2000)


}


export default animate;














