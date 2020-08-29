# Does the Hash Contain a Given Key?
# Write a function that returns true if a hash contains the specified key, and false otherwise.

# Examples
# has_key({ "a" => 44, "b" => 45, "c" => 46 }, "d") ➞ false

# has_key({ "craves" => true, "midnight" => true, "snack" => true }, "morning") ➞ false

# has_key({ "pot" => 1, "tot" => 2, "not" => 3 }, "not") ➞ true


def has_key(hash, key)
  return hash.has_key?(key)
end