// const arguments = (...anyName) => {
//     anyName.map(function(one){
//         console.log(one);
//     })
// };
// arguments('Jobayer', 'Joban', 'Nayem', 'Hassan', 'Hossain');


const Extra = (name1, name2, ...moreName) =>{
    console.log(name1, name2);
    moreName.map(function(one){
        console.log(one);
    })
};
Extra('Jobayer', 'Joban', 'Hassain', 'Hossain', 'Nayem', 'Job');
