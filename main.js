'use strict';

let $starForm;

$(() => {
  $starForm = $('#starForm');
  $starForm.submit(getData);
})

function getData(e){
  e.preventDefault();

let value = $starForm.find('input').val();
            $starForm.find('input').val(null);

  $.get(`http://swapi.co/api/people/${value}/`)
  .done(data => {

    let $card = $('#template').clone();

    $card.removeAttr('id');

    $card.find('.name').text(data.name);
    $card.find('.gender').text(data.gender);
    $card.find('.mass').text(data.mass);

    $('.jediList').append($card);

  })
  .fail(err => {
    console.log("err:", err);
  })


}
