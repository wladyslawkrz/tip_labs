<?php
$a = "3 7 10 2 8";

$numbers = explode(" ", $a);

$b = 0;

foreach ($numbers as $number) {
    $number = intval($number); 

    if ($number <= 5) {
        $b += $number; 
    } elseif ($number >= 9) {
        $b -= $number; 
    }
}

echo "Результат: $b";
?>
