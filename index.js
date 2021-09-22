function superbowlWin(array) {
    const win = array.find(function(array) {
        return array['result'] === 'W';
    })
   if (win === undefined) {
       return undefined
   } else {
       return win['year'];
   }
}

