$(function() {
  function buildHTML(message) {
    var insertImage = '';
    if (message.image) {
      insertImage = `<img src = ${message.image} class = "lower-message__image">`
    }

    var html = `<div class="message" data-message-id=${ message.id }>
                    <div class="upper-message">
                      <div class="upper-message__user-name">
                        ${messsage.name}
                      </div>
                      <div class="upper-message__date">
                        ${message.date}
                      </div>
                    </div>
                    <div class="lower-message">
                        <p class="lower-message__content">
                          ${message.text}
                        </p>
                          ${insertImage}
                    </div>
                </div>`;  
    return html;
  }

   var interval = setInterval(function() {
      if (window.location.href.match(/\/groups\/\d+\/messages/)) {
    $.ajax({
      url: location.href.json,
      type: 'GET',
      dataType : 'json'
    })
    .done(function(messages) {
      var last_id = $('.message:last').data('messageId');
      var insertHTML = '';
      messages.forEach(function(message){
        if (message.id > last_id ){
          insertHTML += buildHTML(message);
        }
      });
      $('.upper-message').appendTo(insertHTML);
      // alert('自動更新に成功しました')
    })


    .fail(function() {
      alert('自動更新に失敗しました');
    });
  } else {
    clearInterval(interval);
   }} , 5 * 1000 );
});
