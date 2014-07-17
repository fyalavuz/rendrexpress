module.exports = function(match) {
  match('', 'home#index');
  match('/home/sample', 'home#sample');
};