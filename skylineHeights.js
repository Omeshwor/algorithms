// Skyline Heights
// You are given an array with heights of consecutive buildings in the city. For example, [-1,7,3] would
// represent three buildings: first is actually below street level, second is seven stories high, and third is
// three stories high (but hidden behind the seven-story onbe). You are situated at street level. Return an
// array containing heights of the buildings you can see, in order. Given [1,-1,7,3] return [1,7] .

function skylineHeights(arr){
    var newArr = [];
    var max = arr[0];

    for(var i = 0; i < arr.length; i++){
      if (arr[i] >= max && arr[i] >= max){
        max = arr[i];
        newArr.push(arr[i]);
      } 
    }

    console.log(newArr);
}

skylineHeights([1,-1,3,7,3]);
skylineHeights([1,5,10,-2,5])