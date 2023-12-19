<?php
//Принимаем постовые данные
$title=$_POST['title'];
$name=$_POST['name'];
$phone=$_POST['phone'];
$question=$_POST['question'];
//Тут указываем на какой ящик посылать письмо
$to = "vladislav.chumak2@gmail.com";
//Далее идет тема и само сообщение
// Тема письма
$subject = "Заявка с сайта (Услуга: ".htmlspecialchars($title).")";
// Сообщение письма
$message = "
Название услуги: ".htmlspecialchars($title)."<br />
Имя: ".htmlspecialchars($name)."<br />
Телефон: <a href='tel:$phone'>".htmlspecialchars($phone)."</a><br />
Сообщение: ".htmlspecialchars($question);
// Отправляем письмо при помощи функции mail();
$headers = "From: tt.ink <sender@tt.ink>\r\nContent-type: text/html; charset=UTF-8 \r\n";
mail ($to, $subject, $message, $headers);
// Перенаправляем человека на страницу благодарности и завершаем скрипт
exit();
?>