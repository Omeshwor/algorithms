# Weekly Salary

# Write a function that takes an array of hours and returns the total weekly salary.

#     The first element of the array is the number of hours spent at work on Monday.
#     The second element of the array is the number of hours spent at work on Tuesday, etc.
#     A worker earns $10 an hour for the first 8 hours.
#     For every overtime hour, he's earning $15.
#     On Saturday and Sunday, the employer pays twice for each hour and overtime.

# Examples

# weekly_salary([8, 8, 8, 8, 8, 0, 0]) ➞ 400

# weekly_salary([10, 10, 10, 0, 8, 0, 0]) ➞ 410

# weekly_salary([0, 0, 0, 0, 0, 12, 0]) ➞ 280

# Notes

# Every element in the array is greater than or equal to 0.

def weekly_salary(hours)
  hours.each_with_index.reduce(0) do |sum, (h, i)|
    if i < 5
			sum + (h < 9 ? h * 10 : 80 + (h - 8) * 15)
		else
			sum + (h < 9 ? h * 20 : 160 + (h - 8) * 30)
		end
  end
end

weekly_salary([10, 10, 10, 0, 8, 0, 0])