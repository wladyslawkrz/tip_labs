<?php
$stringSingleQuotes = '<pre>   Hello, world!   </pre>';

$stringDoubleQuotes = "Это строка с двойными кавычками.";

// heredoc
$stringHeredoc = <<<EOD
Это строка с использованием
heredoc-синтаксиса.
Она может вмещать несколько строк.
EOD;

$array = array('apple', 'orange', 'banana', 'watermelon');

echo "<pre>Используя echo:\n";
echo $array[0] . ", " . $array[1] . ", " . $array[2] . ", " . $array[3] . "\n</pre>";

echo "<pre>Используя print:\n";
print $array[0] . ", " . $array[1] . ", " . $array[2] . ", " . $array[3] . "\n</pre>";

echo "<pre>Используя print_r:\n";
print_r($array);
echo "</pre>";

echo "<pre>Используя serialize:\n";
echo serialize($array) . "\n</pre>";

// Функция 6: ltrim
$trimmedLeft = ltrim($stringSingleQuotes);

// Функция 18: str_split
$stringToArray = str_split($stringDoubleQuotes);

// Функция 30: strrev
$reversedString = strrev($stringHeredoc);

// Функция 42: substr_replace
$replacedString = substr_replace($stringSingleQuotes, 'PHP', 3, 5);

echo "<pre>";
echo "Оригинальная строка:\n";
var_dump($stringSingleQuotes);
echo "После ltrim:\n";
var_dump($trimmedLeft);
echo "\n";

echo "Оригинальная строка:\n";
var_dump($stringDoubleQuotes);
echo "После str_split:\n";
var_dump($stringToArray);
echo "\n";

echo "Оригинальная строка:\n";
var_dump($stringHeredoc);
echo "После strrev:\n";
var_dump($reversedString);
echo "\n";

echo "Оригинальная строка:\n";
var_dump($stringSingleQuotes);
echo "После substr_replace:\n";
var_dump($replacedString);
echo "</pre>";
?>
