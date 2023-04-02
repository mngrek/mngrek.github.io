 var delayPopup = 5000;
setTimeout(function() {
  document.getElementById('parent_popup').style.display = 'block';
}, delayPopup);

document.getElementById('parent_popup').addEventListener('click', function(event) {
  if (event.target.id === 'parent_popup' || event.target.classList.contains('close')) {
    document.getElementById('parent_popup').style.display = 'none';
  }
});
 

// Получаем ссылки на элементы
const emailInput = document.getElementById("email");
const agreeCheckbox = document.getElementById("agree");
const popupWindow = document.getElementById("parent_popup");

// Функция для закрытия окна
function closePopup() {
  popupWindow.style.display = "none";
}

// Обработчик событий на кнопку
document.querySelector(".btninputs").addEventListener("click", function(event) {
  // Проверяем, заполнено ли поле email и установлена ли галочка согласия
  if (emailInput.value && agreeCheckbox.checked) {
    // Если условие выполнено, закрываем окно
    closePopup();
  }
});