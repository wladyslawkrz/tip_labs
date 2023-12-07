<?php
$facultyData = array(
    "Факультет1" => array(
        "Кафедра1" => array(
        	"Преподаватель4" => "Ученое_звание4",
            "Преподаватель1" => "Ученое_звание1",
            "Преподаватель2" => "Ученое_звание2",
            
        ),
        "Кафедра2" => array(
            "Преподаватель5" => "Ученое_звание5",
            "Преподаватель7" => "Ученое_звание7",
        ),
    ),
    "Факультет2" => array(
        "Кафедра3" => array(
            "Преподаватель6" => "Ученое_звание6",
            "Преподаватель3" => "Ученое_звание3",
        ),
    ),
);
function printTeachersAlphabetically($facultyData)
{
    $teachers = array();
    foreach ($facultyData as $faculty => $departments) {
        foreach ($departments as $department => $teachersData) {
            foreach ($teachersData as $teacher => $title) {
                $teachers[$teacher] = $title;
            }
        }
    }

    ksort($teachers);
    echo "Список преподавателей в алфавитном порядке:\n";
    foreach ($teachers as $teacher => $title) {
        echo "$teacher - $title\n";
    }
}
printTeachersAlphabetically($facultyData);
?>