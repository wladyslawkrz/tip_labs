<?php
$numbers = array(2, 8, 5, 12, -3, 7, 9, -1);

$sum = 0;

foreach ($numbers as $number) {
    if ($number > 0 && $number < 10) {
        $sum += $number;
    }
}

echo "Сумма чисел больше 0 и меньше 10: " . $sum;
?>