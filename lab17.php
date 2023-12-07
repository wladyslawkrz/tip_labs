<?php
function calculateSquareRoot($number) {
    $sqrt = sqrt($number);
    $roundedUp = ceil($sqrt);
    $roundedDown = floor($sqrt);

    return ['max' => $roundedUp, 'min' => $roundedDown];
}

$array = [];

for ($i = 0; $i < 50; $i++) {
    $array[] = mt_rand(254, 987) / 10; 
}

$resultArray = [];

foreach ($array as $number) {
    $result = calculateSquareRoot($number);
    $resultArray[] = $result;
}

print_r($resultArray);
?>
