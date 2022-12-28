#include <stdio.h>
#include <stdlib.h>

unsigned long fibonacci(unsigned int number) {
    if (number < 2) {
        return number;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}

int main(int argc, char *argv[]) {
    unsigned long n = strtoul(argv[1], NULL, 10);
    for (unsigned int i = 1; i <= n; i++) {
        printf("Fibonacci sequence number at index %u is %lu\n", i, fibonacci(i));
    }
    return 0;
}
