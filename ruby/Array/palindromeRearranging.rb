# Given a string, find out if its characters can be rearranged to form a palindrome.

def palindromeRearranging(inputString)
  new_arr = []
  new_arr2 = []
  arr = inputString.split('').sort
  for i in 0..arr.size-1
    if i.even?
      new_arr << (arr[i])
    else
      new_arr2 << arr[i]
    end
  end
  str = (new_arr + new_arr2.reverse).join('')
  str == str.reverse
end

def palindromeRearranging(inputString)
    inputString = inputString.chars.sort
    
    num_not_matching = 0
    idx = 0
    while idx < inputString.length
        if inputString[idx] == inputString[idx+1]
            idx+=2
        else
            num_not_matching +=1
            idx += 1
        end
    end
    
    num_not_matching <= 1
end


# p palindromeRearranging("aabb")
# p palindromeRearranging("abcabc")
# p palindromeRearranging("bbccaa")
p palindromeRearranging("abbcabb")