var rotate = function(nums, k) {

    var temp, prev;
    var len = nums.length;
    for (i = 0; i < k; i++) {
        prev = nums[nums.length - 1];
        for (var j = 0; j < nums.length; j++) {
            temp = nums[j];
            nums[j] = prev;
            prev = temp;
        }
    }

};
