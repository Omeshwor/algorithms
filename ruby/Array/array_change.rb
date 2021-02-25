def array_change(inputArray)
  #loop through the array
  # start at 1
  # send i 
  # unless i > i -1 add 1
  # keep count
  count = 0
  for i in 1..inputArray.size-1
      while (inputArray[i] <= inputArray[i-1])
      inputArray[i] += 1
      count += 1
      i = i
      end
  end
  count
end

def arrayChange(inputArray)
  sum = 0
  (1...inputArray.length).map do |i|
      if inputArray[i] <= inputArray[i-1] then
          sum = sum + inputArray[i-1] - inputArray[i] + 1
          inputArray[i] = inputArray[i-1]+1
      end
  end
  sum
end


# For inputArray = [1, 1, 1], the output should be
# arrayChange(inputArray) = 3.

p inputArray([1,1,1])
p inputArray([2,1,10,1])
