solution_one = Proc.new do

sum = 0
1000.times do |i|
  if (i%3 == 0) || (i%5 == 0)
    sum += i
  end
end
puts sum.to_s

end


solution_two = Proc.new do

sum = 0
fib_one = 2
fib_two = 1
while fib_one <= 4000000 do
  if fib_one%2 == 0
    sum += fib_one
  end
  fib_one += fib_two
  fib_two = fib_one - fib_two
end
puts sum.to_s

end


solution_three = lambda do

number = 600851475143
factor = Math.sqrt(number).floor

is_prime = lambda do |n|
  i = Math.sqrt(n).floor
  while i > 1 do
    if (n%i == 0)
      return false
    else
    i -= 1
    end
  end
  return true
end


while factor > 1 do
  if (number%factor == 0) && (is_prime.call(factor))
    puts factor.to_s
    return
  else
    factor -= 1
  end
end

end

solution_one.call
solution_two.call
solution_three.call
