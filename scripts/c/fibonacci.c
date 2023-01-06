#include <errno.h>
#include <stdio.h>
#include <stdlib.h>

unsigned long fibonacci(unsigned int number) {
    if (number < 2) {
        return number;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}

int main(int argc, char *argv[]) {
    if (argc < 2) {
        printf("Provide an argument for fibonacci sequence\n");
        return 1;
    }

    unsigned long n = strtoul(argv[1], NULL, 10);

    if (errno != 0) {
        printf("Invalid argument for fibonacci sequence\n");
        return 1;
    }

    for (unsigned int i = 1; i <= n; i++) {
        printf("Fibonacci sequence number at index %u is %lu\n", i, fibonacci(i));
    }
    return 0;
}
