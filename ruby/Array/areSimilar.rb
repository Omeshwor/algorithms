# Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

# Given two arrays a and b, check whether they are similar.

# Example

def areSimilar(a, b)
  count = 0
  for i in 0..a.size-1
    if b[i] != a[i]
      if b.find_index(a[i]) == nil
        return false
      else
        temp = b[i]
        ind = b.find_index(a[i]) ? b.find_index(a[i]) : false
        b[i] = b[ind]
        b[ind] = temp
        count += 1
      end
    end
  end
  count <= 1 ? true : false
end

def areSimilar(a,b)
  a.sort == b.sort and a.each_with_index.count{|n,i| b[i] != n } < 3
end

puts areSimilar([1,2,3], [1,2,3])
p areSimilar([1,2,3], [2,1,3])
p areSimilar([1,2,2], [2,1,1])
p areSimilar([1,1,4],[1,2,3])
# For a = [1, 2, 3] and b = [1, 2, 3], the output should be
# areSimilar(a, b) = true.

# The arrays are equal, no need to swap any elements.

# For a = [1, 2, 3] and b = [2, 1, 3], the output should be
# areSimilar(a, b) = true.

# We can obtain b from a by swapping 2 and 1 in b.

# For a = [1, 2, 2] and b = [2, 1, 1], the output should be
# areSimilar(a, b) = false.

# Any swap of any two elements either in a or in b won't make a and b equal.