function reverseString(s) {
    let arr = [];
    try {
      arr = s.split('');
      s = arr.reverse().join('');
    } catch(err){
      console.log(err.message);
    } finally{
      console.log(s)
    }
    
}