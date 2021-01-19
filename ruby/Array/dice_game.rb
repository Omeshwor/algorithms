# Don't Roll Doubles!

# John is playing a dice game. The rules are as follows.

#     Roll two dice.
#     Add the numbers on the dice together.
#     Add the total to your overall score.
#     Repeat this for three rounds.

# But if you roll DOUBLES, your score is instantly wiped to 0 and your game ends immediately!

# Create a function which takes in a matrix as input, and return John's score after his game has ended.
# Examples

def dice_game(arr)
  total = 0
  for i in arr
    if i[0] == i[1]
      return total = 0
    end
    total += i[0] + i[1]
  end
  total
end

puts dice_game([[1, 2], [3, 4], [5, 6]]) #➞ 21

puts dice_game([[1, 1], [5, 6], [6, 4]]) #➞ 0

puts dice_game([[4, 5], [4, 5], [4, 5]]) #➞ 27

# Notes

#     Ignore all other arrays in the matrix if a throw happens to be doubles and go straight to returning 0.
#     John only has two dice and will always give you outcomes for three rounds.