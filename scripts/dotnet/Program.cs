namespace Fibonacci;
class Program
{
    static int Main(string[] args)
    {
        if (args.Length < 1) {
            Console.Error.WriteLine("Provide an argument for fibonacci sequence");
            return 1;
        }

        var arg = args[0];

        var number = Convert.ToInt32(arg);

        for (var i = 1; i <= number; i++) {
            Console.WriteLine("Fibonacci sequence number at index {0} is {1}", i, fibonacci(i));
        }

        return 0;
    }

    static int fibonacci(int number) {
        if (number < 2) {
            return number;
        }
        return fibonacci(number - 1) + fibonacci(number - 2);
    }
}
