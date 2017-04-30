Write a program that outputs all possibilities to put + or - or nothing between the numbers 1,2,…,9 (in this order) such that the result is 100. For example 1 + 2 + 3 - 4 + 5 + 6 + 78 + 9 = 100.

def greeting

  puts "Please enter a positive number"
  number = gets.chomp.to_i
  array = (1..number)
  sum_of_numbers = array.inject(:+)
  product_of_numbers = array.inject(:*)

  p "Would you like to keep the sum: #{sum_of_numbers} or product #{product_of_numbers}"
  p "enter 1 for sum, 2 for product"
  choice = gets.chomp().to_i
  give_answer(choice,sum_of_numbers,product_of_numbers)

end

def give_answer(choice,sum_of_numbers,product_of_numbers)
  if choice == 1
    p sum_of_numbers
  elsif choice == 2
    p product_of_numbers
  else
    p "please choose 1 or 2"
    choice = gets.chomp.to_i
    give_answer(choice,sum_of_numbers,product_of_numbers)
  end
  return choice
end