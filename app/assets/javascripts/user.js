$(function() {

  var search_list = $("#user-search-result");

  function appendUser(user) {

    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add js-add-btn" data-user-id="${user.id}" data-user-name="${user.name}">追加
                  </a>
                </div>`

    search_list.append(html)
  }


// インクリメンタルサーチ 
  function appendNoUser(user) {
    var html = `<li>
                  <div class='chat-group-user clearfix'>${ user }</div>
                </li>`
    search_list.append(html);
  }

  $("#user-search-field").on("keyup", function() {
    var input = $(this).val();

    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })

    .done(function(users) {
      $("#user-search-result").empty();
      if (users.length !== 0) {
        users.forEach(function(user){
          appendUser(user);
        });
      }
      else {
        appendNoUser("一致するユーザーはありません");
      }
    })
    .fail(function() {
      alert('ユーザー検索に失敗しました');
    })
  });

// 追加機能
  var add_list = $("#add-user");

  function addendUser(id, name) {

    var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                  <input name='group[user_ids][]' type='hidden' value=${id}>
                  <p class='chat-group-user__name'>${name}</p>
                  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除
                  </a>
                </div>`

    add_list.append(html)
  }

  $("#user-search-result").on("click", ".chat-group-user__btn", function() {
    var id = $(this).attr("data-user-id")
    console.log(id)
    var name = $(this).attr("data-user-name")
    addendUser(id, name)
    $(this).parent().remove();
  });
});
