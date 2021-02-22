let TelegramBot = function() {
    let bot = {
        token: '1608536474:AAG-IHn5NFXqMd3A6mLkG3tkMOaTpAN0qSE',
        chatId: '-579046579',
    }

    return {
        constructor: function() {},
        sendMessage: function(message) {
            let request = new XMLHttpRequest();
            const url = `https://api.telegram.org/bot${
                bot.token
              }/sendMessage?chat_id=${bot.chatId}&disable_notification=false&parse_mode=markdown&text=${encodeURIComponent(message)}`;
            request.open("GET", url, true);
            request.send();
        }
    }
}();