// function nbYear(p0, percent, aug, p) {
//     let years = 0;
    
//     for (years; p0 < p; years++) {
//       p0 += p0 * (percent / 100) + aug;
//     }
//     return years;
//   }


  function nbYear(p0, percent, aug, p) {
    let years = 0;
    
    while (p0 < p) {
        p0 += p0 * (percent/100)+ aug
      years++
    }
   return years
}


  console.log(nbYear(1500, 5, 100, 5000))