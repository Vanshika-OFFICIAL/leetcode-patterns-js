var moveZeroes=function(nums){
    let slow=0;
    
    for(let fast=0;fast<nums.length;fast++){
        
        if(nums[fast]!==0){
            let temp = nums[slow];
        nums[slow] = nums[fast];
        nums[fast] = temp;
        slow++;
        }
        
    } return;
}