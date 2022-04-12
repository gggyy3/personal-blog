let flag = '0'

const changeMode = function () {
    if(flag === '0'){
        flag = '1'
        document.querySelector('nav').style = "background-color:#222; transition:all 0.3s;"
        document.querySelector('body').style = "background-color:#505050; transition:all 0.3s;"
      }else {
        flag = '0'
        document.querySelector('nav').style = "background-color:white; transition:all 0.3s;"
        document.querySelector('body').style = "background-color:#eee; transition:all 0.3s;"
    }
};

export default changeMode