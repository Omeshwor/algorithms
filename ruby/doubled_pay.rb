# An employee working at a very bizzare company, earns one penny on their first day. However, for every day that passes, their base amount doubles, so they earn two pennies on the second day and four pennies on the third day (totalling 7 pennies). Given a number of days, return how many pennies the employee accumulates.

# Examples
# doubled_pay(1) ➞ 1

# doubled_pay(2) ➞ 3

# doubled_pay(3) ➞ 7

def doubled_pay(n)
  pay = 0
  i = 1
  while (i <= n) do
    pay = (pay * 2) + 1
    i = i + 1
  end
  return  pay     
end

doubled_pay(1)

doubled_pay(2)

doubled_pay(3)