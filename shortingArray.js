let grades = [100,29,49,19,388,49];

grades = grades.sort(descendingSort);

grades.forEach(print)

console.log('assending----------');

grades = grades.sort(assendingSort);

grades.forEach(print)


function descendingSort(x,y){
    return y-x;
}
function assendingSort(x,y){
    return x-y;
}

function print(element){
    console.log(element);
    
}