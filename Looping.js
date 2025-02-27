! PERULANGAN DI JAVASCRIPT
? for, for of, for in, foreach
* while & do while
! MAP
**/

const temanSaya = ['Zainal', 'Farhan', 'Dhani', 'Aldi', 'Amin']

temanSaya.forEach((teman, index) => {
    console.log(teman, index) // kalau mulai dari no 1 cuman ditambahkan + 1
})

// for of itu dapat value nya
for(let teman of temanSaya){
    console.log(teman)
}

// for in itu dapat index nya
for(let teman in temanSaya) {
    console.log(teman)
}
