const makePhone = (arr) => {

    let phone = '(xxx) xxx-xxxx'

    arr.forEach(el => {
        phone = phone.replace('x', el)
        
    });

    return phone

}

console.log(makePhone([5,7,4,3,3,3,9,6,1,6,]))