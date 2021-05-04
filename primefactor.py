
def primeFactors(num):
    output=[]

    for x in range(2, num+1):
        while num % x == 0:
            output.append(x)
            num /= x
    
    print(output)

primeFactors(1)
primeFactors(15)
primeFactors(20)
primeFactors(60)
primeFactors(3)
primeFactors(11)

            

