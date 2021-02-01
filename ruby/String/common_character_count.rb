# Given two strings, find the number of common characters between them.

# Example
def commonCharacterCount(s1, s2)
  arr1 = s1.split('')
  arr2 = s2.split('')
  count = 0
  i = 0
  while i < arr2.size
    j = 0
    while j < arr1.size
      if arr1[j] == arr2[i]
        count += 1
        arr1.delete_at(j)
        arr2.delete_at(i)
        i -= 1
        j -= 1
      end
      j += 1
    end
    i += 1
  end
  count

end

s1 = "aabcc" 
s2 = "adcaa"
puts commonCharacterCount(s1, s2)

# For s1 = "aabcc" and s2 = "adcaa", the output should be
# commonCharacterCount(s1, s2) = 3.

# Strings have 3 common characters - 2 "a"s and 1 "c".