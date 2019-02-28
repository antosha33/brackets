module.exports = function check(str, bracketsConfig) {
        var is = [].slice.call(str);
          for(var i = 0, d = 0; i < is.length; i++){
              if(isOpened(is[i])==false) continue;
              for(var j = 0; j < bracketsConfig.length; j++ ){
                  if(is[i]==bracketsConfig[j][1]){
                     if(is[i-1]==bracketsConfig[j][0]){
                          is.splice(i-1,2);
                          i=-1;
                          break;
                      }
                  }
              }
          }
          function isOpened(a){
              for(var j = 0; j < bracketsConfig.length; j++ ){
                  if(a == bracketsConfig[j][0] && bracketsConfig[j][0] == bracketsConfig[j][1]){
                      return true;
                  }else if(a == bracketsConfig[j][0]){
                      return false;
                  }
              }
          }
        return is.length==0 ? true : false;
  }

