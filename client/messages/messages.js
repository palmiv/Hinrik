Template.messages.helpers({
  messages: function(){
    return Messages.find({}, {sort: {time: 1}} );
    $('#chatWindow').scrollTop($('#chatWindow')[0].scrollHeight);
  }
})