module.exports = getShortMessages;

function getShortMessages(msgs) {
  return msgs.map(function(el) {
    return el.message; 
  }).filter(function(msg) {
    return msg.length < 50;
  });
}
