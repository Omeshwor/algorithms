# Write a function that reverses characters in (possibly nested) parentheses in the input string.

# Input strings will always be well-formed with matching ()s.

#separate the string in parentheses
#

def reverseInParentheses(s)
  stack = []
  word = ''
  s.chars.each do |c|
    if c == '('
      stack.push word
      word = ''
    elsif c == ')'
      word = stack.pop + word.reverse
    else
      word += c
    end
  end
  word
end

# Example


# inputString = "(bar)"
# puts reverseInParentheses(inputString)# = "rab";
inputString = "foo(bar)baz"
puts reverseInParentheses(inputString)# = "foorabbaz";
# inputString = "foo(bar)baz(blim)"
# puts reverseInParentheses(inputString)# = "foorabbazmilb";
# inputString = "foo(bar(baz))blim"
# puts reverseInParentheses(inputString)# = "foobazrabblim".
# Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim"