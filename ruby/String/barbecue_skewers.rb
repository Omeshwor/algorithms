# Barbecue Skewers

# You are in charge of the barbecue grill. A vegetarian skewer is a skewer that has only vegetables (-o). A non-vegetarian skewer is a skewer with at least one piece of meat (-x).

# For example, the grill below has 4 non-vegetarian skewers and 1 vegetarian skewer (the one in the middle).

# ["--xo--x--ox--",
# "--xx--x--xx--",
# "--oo--o--oo--",      <<< vegetarian skewer
# "--xx--x--ox--",
# "--xx--x--ox--"]

# Given a BBQ grill, write a function that returns [# vegetarian skewers, # non-vegetarian skewers]. For example above, the function should return [1, 4].
# Examples
def bbq_skewers(grill) 
  meat_count = 0
  veg_count = 0
  for i in grill
    if i.include?("x")
      meat_count += 1
    else
      veg_count += 1
    end
  end
  [veg_count, meat_count]
end

puts bbq_skewers([
  "--oooo-ooo--",
  "--xx--x--xx--",
  "--o---o--oo--",
  "--xx--x--ox--",
  "--xx--x--ox--"
]) #➞ [2, 3]

puts bbq_skewers([
  "--oooo-ooo--",
  "--xxxxxxxx--",
  "--o---",
  "-o-----o---x--",
  "--o---o-----"
]) #➞ [3, 2]

# Notes

# N/A