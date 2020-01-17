
export default class CommonHelper {

  static clearLocalStorage() {
    const {lang, idEduCategory} = localStorage;
    localStorage.clear();
    sessionStorage.clear();
    this.setAuthorizationToken(false);
    if (lang) {
      localStorage.setItem('lang', lang);
    }
    if (idEduCategory) {
      localStorage.setItem('idEduCategory', idEduCategory);
    }
  };

  static handleError(data) {
    if (data.errors) {
      const err = data.errors[0].code;
      if (err === 'INVALID_TOKEN' || err === 'AUTHENTICATION_FAILED' || err === 'invalid signature' || err === 'TOKEN_EXPIRED') {
        this.clearLocalStorage();
        window.location.replace('/');
      } else if (err === 'BLOCKED_USER') {
        alert(`${data.errors[0].message}`);
        this.clearLocalStorage();
        window.location.replace('/');
      } else {
        return (
          alert(data.errors[0].message)
        );
      }
    }
    return null;
  };

  static setAuthorizationToken(token) {
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common.Authorization;
    }
  }

  static change_alias(alias) {
    let str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");
    str = str.replace(/đ/g,"d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    str = str.replace(/ + /g," ");
    str = str.trim();
    return str;
  }

  static dateString(date, showTime) {
    date = new Date(date);
    const year = date.getUTCFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    month = this.helperDateString(month + 1);
    day = this.helperDateString(day);

    let dateString = `${day}-${month}-${year}`;
    if (showTime) {
      let hours = date.getHours();
      let min = date.getMinutes();
      dateString = `${hours}:${min} ` + dateString;
    }
    return dateString;
  }

  static helperDateString(number) {
    if (number < 10) {
      number = '0' + number.toString();
    }
    return number.toString();
  }

  static cutContent(content) {
    const DEFAULT_LENGTH_CONTENT = 100;
    let result = content;
    if (content && content.length > DEFAULT_LENGTH_CONTENT) {
      const indexCut = content.indexOf(' ', DEFAULT_LENGTH_CONTENT);
      if (indexCut === -1) {
        return result;
      }
      result = content.substring(0, indexCut);
    }
    return result;
  };

};
