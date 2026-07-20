var maxArea=function(height){
    let left=0;
    let right=height.length-1;
    let maxArea=0;
    let currentArea=0;
    while(left<right){
       let  width=right-left;
        currentArea=Math.min(height[left], height[right])*width;
        if (currentArea>maxArea){
             maxArea = currentArea;
        }
        if(height[left]<height[right]){
            left++
        }else{
            right--
        }
    }return maxArea
}