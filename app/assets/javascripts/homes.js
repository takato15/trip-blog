// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/


// TOPページ文章フェードインさせる
document.addEventListener("turbolinks:load"
, function () {
  $(function() {
  // 一旦hide()で隠してフェードインさせる
    $('p').hide().fadeIn(2000);

  });
})