# Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

# Example
def sortByHeight(arr)
  i = 0
  new_arr = []
  sorted = arr.select{ |x| x != -1}.sort()
  j = 0
  for i in arr
    if i != -1
      new_arr.push(sorted[j])
      j += 1
    else
      new_arr.push(i)
    end
  end
  new_arr
end

a = [-1, 150, 190, 170, -1, -1, 160, 180]
puts sortByHeight(a)
# For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
# sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190]