import sys

def fibonacci(number: int):
    if number < 2:
        return number

    return fibonacci(number - 1) + fibonacci(number - 2)

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Provide an argument for fibonacci sequence", file=sys.stderr)
        sys.exit(1)

    n = int(sys.argv[1])
    for i in range(1, n + 1):
        print(f"Fibonacci sequence number at index {i} is {fibonacci(i)}")
