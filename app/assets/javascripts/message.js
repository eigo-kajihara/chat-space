$(function(){
  function buildHTML(data) {
    var Image = '';
    if (data.image) {
      Image = `<img src = ${data.image} class = "lower-message__image">`
    }

    var html = `<div class="message" data-message-id=${ data.id }>
                    <div class="upper-message">
                      <div class="upper-message__user-name">
                        ${data.name}
                      </div>
                      <div class="upper-message__date">
                        ${data.date}
                      </div>
                    </div>
                    <div class="lower-message">
                        <p class="lower-message__content">
                          ${data.text}
                        </p>
                          ${data.image}
                    </div>
                </div>`;
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.form__message').reset();
      $(".form__submit").attr('disabled', false);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('error');
    });
  });
});
