<?php

function fibonacci($number) {
    if ($number < 2) {
        return $number;
    }

    return fibonacci($number - 1) + fibonacci($number - 2);
}

if (count($argv) < 2) {
    fwrite(STDERR, "Provide an argument for fibonacci sequence" . PHP_EOL);
    exit(1);
}


$n = intval($argv[1]);
foreach (range(1, $n) as $i) {
    $result = fibonacci($i);
    echo "Fibonacci sequence number at index $i is $result" . PHP_EOL;
}
