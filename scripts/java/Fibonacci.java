class Fibonacci {
    public static void main(String[] args) {
        int n = Integer.parseInt(args[0]);

        for (int i = 1; i <= n; i++) {
            System.out.printf("Fibonacci sequence number at index %d is %d\n", i, Fibonacci.fibonacci(i));
        }
    }

    public static int fibonacci(int number) {
        if (number < 2) {
            return number;
        }

        return fibonacci(number - 1) + fibonacci(number - 2);
    }
}
