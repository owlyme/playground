// 1. get all combinations of 4 digits and 3 operators
// 2. evaluate the expression (combination)
// 3. take paranthesis into account
// 4*3*2*1 / 4*4*4

// function evaluate(expr: string): number {
//     return 0 // todo
// }

// // 1, 2, 3, 4
// // 1234, 1324, 1342, ...
// function get_combinations(nums: number[]): string[] {
//    return []
// }


// algorithm, recursive, top-down
function comb(nums/*: number[]*/)/*: number[][]*/ {
    // base case
    if (nums.length == 1) {
        return [nums];
    }
    // [... x ...]
    const result/*: number[][]*/ = [];
    for (let i = 0 ; i < nums.length; ++i) {
        let left = nums.slice(0, i);
        let right  = nums.slice(i + 1);
        let tmp = left.concat(right);
        let arr = comb(tmp);
        for (let it of arr) {
            it.unshift(nums[i]);
            result.push(it);
        }
    }
    return result;
}

// iterative, bottom-up
function comb2(nums) {
    // [1] -> [[1]]
    // [1, 2] -> [[2, 1], [1, 2]]
    // [1, 2, 3] -> [[3, 2, 1], [2, 3, 1], [2, 1, 3] [1, 2]]
    let result = [[nums[0]]];
    for (let i=1; i<nums.length; ++i) {
        const n2 = nums[i];
        const buf = [];
        for (const arr of result) {
            for (let j=0; j<=arr.length; ++j) {
                let copy = [...arr];
                copy.splice(j, 0, n2);
                buf.unshit(copy);
            }
        }
        result = buf;
    }
    return result;
}

console.log(comb2([1, 2, 3, 4]));