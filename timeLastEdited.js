/**
 *Logs the date and time the input was last modified. 
 *    Written by Brian Young on 17 OCT 22
 *
 *@param {input} input Watched cell that triggers new date and time log. 
 *@return Logs the date and time input cell was modified.
 *@customfunction
 */

 function timeLastEdited(input) {
    if(input === ''){
        result = ""
    } else {
        result = new Date()
      }
      return result
  }