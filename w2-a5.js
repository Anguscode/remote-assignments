function twoSum(nums, target) {

    const number = nums;
    const total = target;
    let back = 'None';

    for (const item of number) {
        if( item + number[0] === total ){
            back = [ number.indexOf(number[0]) , number.indexOf(item) ] 
        }else if(item + number[1] === total ){
            back = [ number.indexOf(number[1]) , number.indexOf(item) ] 
        }else if(item + number[2] === total ){
            back = [ number.indexOf(number[2]) , number.indexOf(item) ] 
        }
    }
    
    return back

}

twoSum([2, 7, 11, 15], 9);

/*
For example:
twoSum([2, 7, 11, 15], 9);
Should returns:
[0, 1]
Because:
nums[0] + nums[1] is 9

*/
