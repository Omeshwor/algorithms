# Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing 
# no more than one element from the array.

# Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing 
# only one element is also considered to be strictly increasing.

# Example

def almostIncreasingSequence(sequence)
  ans = true
  i = 0
  len = sequence.length-1
  while (i < sequence.length-1 && ans == true)
    if (sequence[i] < sequence[i+1])
      ans = true
    else
      # puts sequence.inspect
      if(sequence[i+2] != nil && sequence[i+2] > sequence[i])
        sequence.delete_at(i+1)
      elsif(i+1 == len)
        sequence.delete_at(i+1)
      else
        sequence.delete_at(i)
      end
      ans = (sequence.length >= len)
      i = -1
    end
    i += 1
  end
  ans

end


puts almostIncreasingSequence([1,3,2,1]) #false
puts almostIncreasingSequence([1,3,2]) # true
puts almostIncreasingSequence([1,2,1,2]) #false
puts almostIncreasingSequence([10, 1, 2, 3, 4, 5]) #true
puts almostIncreasingSequence([1, 1, 1, 2, 3]) #false
puts almostIncreasingSequence([40, 50, 60, 10, 20, 30]) #false
puts almostIncreasingSequence([1,1]) #true
puts almostIncreasingSequence([1, 2, 5, 3, 5]) #true
puts almostIncreasingSequence([1, 2, 3, 4, 3, 6]) #true
puts almostIncreasingSequence([3, 5, 67, 98, 3]) #true
puts almostIncreasingSequence([1, 2, 3, 4, 99, 5, 6]) #true
# For sequence = [1, 3, 2, 1], the output should be
# almostIncreasingSequence(sequence) = false.

# There is no one element in this array that can be removed in order to get a strictly increasing sequence.

# For sequence = [1, 3, 2], the output should be
# almostIncreasingSequence(sequence) = true.

# You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get 
# the strictly increasing sequence [1, 3].