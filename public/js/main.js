  var socketio = io();

  $(function () {
      $('#messages_form').submit(function () {
          if ($('#input_msg').val() == "") {
              alert('本文を入力してください。');
          } else {
              socketio.emit('messages', $('#input_msg').val());
              $('#input_msg').val('');
          }
          return false;
      });

      socketio.on('messages', function (msg) {
          var nowDate = new Date(),
              year = nowDate.getFullYear(),
              month = ("0" + (nowDate.getMonth() + 1)).slice(-2),
              day = ("0" + nowDate.getDate()).slice(-2),
              hour = ("0" + nowDate.getHours()).slice(-2),
              minute = ("0" + nowDate.getMinutes()).slice(-2),
              second = ("0" + nowDate.getSeconds()).slice(-2),
              nowInfo = year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;
          $('#messages').append($('<li>').text(msg + " - " + nowInfo));

      });
  });
