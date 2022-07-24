  //Lets use prep
  //1.Parameters string and numbers
  //2 .Examples and returns(result )
//   Input: s = "III"
// Output: 3
// 3.Explanation: III = 3
//input = IV output = 4 explanation : V-I  also IX
//4.pseudocode 
//i need a map for all the roman values including numbers and strings 
//split them up and loop through 
// check for conditionals using if and else statement
//return result 
//test out using console.log






var romanToInt = function(s){
    const map = {I:1, V:5,X:10, L:50, C:100, D:500, M:1000}
    let result = 0
    s.split('').forEach((num,i)=>{
        if(map[num]< map[s[i +1]]){
            result -= map[num]
        }else{
            result += map[num]
        }
    })
    return result
}