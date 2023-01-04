package main

import (
    "fmt"
    "os"
    "strconv"
)

func fibonacci(x int) int {
    if x <= 1 {
        return x
    }

    return fibonacci(x - 1) + fibonacci(x - 2)
}

func main() {
    if len(os.Args) < 2 {
        fmt.Fprintln(os.Stderr, "Provide an argument for fibonacci sequence")
        os.Exit(1)
    }

    n, err := strconv.Atoi(os.Args[1])

    if err != nil {
        fmt.Fprintln(os.Stderr, err)
        os.Exit(1)
    }

    for i := 1; i <= n; i++ {
        fmt.Printf("Fibonacci sequence number at index %d is %d\n", i, fibonacci(i))
    }
}
