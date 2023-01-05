use std::env;

fn main() {
    let mut args = env::args();

    let input = args.nth(1).expect("Provide an argument for fibonacci sequence");

    let mut number: u32 = input.parse()
        .expect("Provide a valid argument for fibonacci sequence");

    number = number + 1;

    for i in 1..number {
        println!("Fibonacci sequence number at index {} is {}", i, fibonacci(i));
    }
}

fn fibonacci(x: u32) -> u64 {
    if x <= 1 {
        return x.into();
    }

    return fibonacci(x - 1) + fibonacci(x - 2);
}
