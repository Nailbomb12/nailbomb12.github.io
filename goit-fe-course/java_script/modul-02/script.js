/*
   Есть три курорта: taba, sharm или hurgada.
   
   Необходимо через prompt попросить ввести число, от 1 до 3-х.
   
   В тексте prompt необходимо написать какое число соотвествует
   какому курорту, на ваш выбор.
   
   После этого вывести сообщение о том, что пользователь 
   выбрал такой-то курорт или сообщение о том, что введено
   число, варианта курорта для которого не было.


var value = parseInt(+prompt('Пожалуйста введите соответствующий номер: \n 1 - Taba;\n 2 - Sharm; \n 3 - Hurgada',''));
var a;

switch (value) {
  case 1:
    a = 'Taba'; alert ( `Вы выбрали ${a}` );
    break;
  case 2:
    a = 'Sharm'; alert ( `Вы выбрали ${a}` );
    break;
  case 3:
    a = 'Hurgada'; alert ( `Вы выбрали ${a}` );
    break;
  case 0:
    alert ('Приходите еще!');
    break;
  default:
    alert ( 'Такого курорта у нас нет.' );
}

*/

/*
  Пользователь через prompt вводит число участников группы. 
  Необходимо проверить является ли введенные данные целым 
  положительным числом. Вывести alert в случае ошибочного ввода.
        
  Всего имеется три группы sharm, hurgada и taba.
  В группах ограничено кол-во свободных мест:
    sharm - 15
    hurgada - 25
    taba - 6
    
  Если количество мест позволяет, то вывести пользователю 
  сообщение через confirm что есть место в группе такой-то, 
  согласен ли пользоваетель быть в этой группе?
  
  Если ответ ok, уменьшаем число свободных мест на  число участников группы.
  Если ответ нет, предлагаем следующую группу со свободными местами.
  
  Если мест нигде нет, выводим сообщение alert('Мест нет!')
*/

let members = prompt('Введите число участников группы', '');
let sharm = 15;
let hurgada = 25;
let taba = 6;
var proffer, lastLet, memberLen;

//Чтобы слово "место" в сообщении выводилось в нужном падеже, в зависимости от введенного значения
memberLen = members.length;
lastLet = members.charAt(memberLen - 1);

if (lastLet == 1){
  var normWord = 'место';
} else if (lastLet >=2 && lastLet <= 4) {
  normWord = 'места';
} else {
  normWord = 'мест';
}

//Создаем основной сценарий
switch (true){
  case ((Math.ceil(members) - members) > 0 || members < 0):
    alert ( 'Введены некорректные данные' );
    break;
  case (members === null):
    alert ( 'Приходите еще!');
    break;
  case (members > Math.max(taba, sharm, hurgada)):
    alert ('В данный момент нет ни одной подходящей группы');
    break;
  case members <= taba:
    proffer = confirm (`В группе Taba есть ${members} ${normWord}. Забронировать?` );
    
    if (proffer) {
      taba = taba - members;
      alert (`Поздравляем! Заказ успешно оформлен.\nВ группе Taba осталось еще ${taba} свободных мест.\nПриведите еще ${taba} друзей и получите скидку!`);
      break;
    }
  case members <= sharm:
    proffer = confirm (`В группе Sharm есть ${members} ${normWord}. Забронировать?` );
    
    if (proffer) {
      sharm = sharm - members;
      alert ( `Поздравляем! Заказ успешно оформлен. \nВ группе Sharm осталось еще ${sharm} свободных мест.\nПриведите еще ${sharm} друзей и получите скидку!` );
      break;
    }
  case members <= hurgada:
    proffer = confirm (`В группе Hurgada есть ${members} ${normWord}. Забронировать?` );
    
    if (proffer) {
      hurgada = hurgada - members;
      alert ( `Поздравляем! Заказ успешно оформлен.\nВ группе Hurgada осталось еще ${hurgada} свободных мест.\nПриведите еще ${hurgada} друзей и получите скидку!` );
    } else {
      alert ( 'Приходите еще!');
    }
}





