const data = [5, 10, 4, 3];

// const sorted = data.sort();
// console.log(sorted);


// passing in a comparator function
const sorted2 = data.sort((next, current) => {
    const result = next - current;
    console.log(`Current: ${current} - NEXT: ${next} = ${result} `);
    return result;
});
console.log(sorted2);
/*

BUBBLE SORT
5, 10, 4, 3
1.
                .  .
    [5 vs 10] = 5, 10, 4, 3 = SWOP
                   .   .
    [10 vs 4] = 5, 4, 10, 3 = SWOP
                      .   .
    [10 vs 3] = 5, 4, 3, 10 = SWOP

    {{ 3 SWOPS = do another loop }}
2.
               .  .
    [4 vs 5] = 4, 5, 3, 10 = keep
                  .  .
    [5 vs 3] = 4, 3, 5, 10 = SWOP
                      .   .
    [5 vs 10] = 4, 3, 5, 10 = keep

    {{ 1 SWOP = do another loop }}
3.
               .  .
    [4 vs 3] = 3, 4, 5, 10 = SWOP
                  .  .
    [4 vs 5] = 3, 4, 5, 10 = keep
                      .  .
    [5 vs 10] = 3, 4, 5, 10 = keep

    {{ 1 SWOP = do another loop }}
4.
               .  .
    [3 vs 4] = 3, 4, 5, 10 = keep
                  .  .
    [4 vs 5] = 3, 4, 5, 10 = keep

    [5 vs 10] = 3, 4, 5, 10 = keep

    {{ 0 SWOPS = done }}

*/

// const data2 = [5, 10, "100", 4, 3];
// const sorted3 = data2.sort();
// console.log(sorted3);

const strings = ['t', 'A', 'a', 'B', 'b'];

console.log(strings.sort());
console.log(strings.sort((a, b) => {
    return a.localeCompare(b);
}));


const objects = [
    { name: 'Tomato', cost: 10, weight: 5 },
    { name: 'Carrot', cost: 15, weight: 2 },
    { name: 'Onion', cost: 5, weight: 7 },
];

function getSortValue(vegetable) {
    return vegetable.cost;
}

console.log("ASCENDING by cost:", objects.sort((a, b) => {
    const valueA = getSortValue(a);
    const valueB = getSortValue(b);
    return valueA - valueB;
}));

console.log("DESCENDING by cost:", objects.sort((a, b) => {
    const valueA = getSortValue(a);
    const valueB = getSortValue(b);
    return (valueA - valueB) * -1;
}));
