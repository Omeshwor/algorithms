# Square Every Digit
# Create a function that squares every digit of a number.
def square_digits(num)
  str = num.to_s.split('')
  product = ""
  str.each do |c|
    product += (c.to_i * c.to_i).to_s
  end
  return product.to_i
end


# Examples
puts square_digits(9119) #➞ 811181

puts square_digits(2483) #➞ 416649

puts square_digits(3212) #➞ 9414
# Notes
# The function receives an integer and must return an integer.