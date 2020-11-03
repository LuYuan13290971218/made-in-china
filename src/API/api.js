import axios from 'axios'

var baseUrl = '/music'
function sendGetRequest(url , params){
    return new Promise(function(resolve , reject){
        axios.get(baseUrl + url ,params).then(function(data){
            resolve(data)
        }),function(err){
            reject(err)
        }
    })
}

function sendPostRequest(url , params){
    return new Promise(function(resolve , reject){
        axios.get(baseUrl + url , params).then(function(data){
            resolve(data)
        }),function(err){
            reject(err)
        }
    })
}

export default {
    // 注册
    zhuCeData( params){
        return sendPostRequest('/register/cellphone?phone='+params.phone+'&captcha='+params.captcha+'&password='+params.password+'&nickname='+params.nickname+'' , params)
    },
    // 密码登录
       miMaData(params){
          return sendPostRequest(  params)
       },
    // 发送验证码
    sendData(params){
        return sendPostRequest('/captcha/sent?phone='+params.phone+'',params)
    },
    // 验证验证码
    yanZhengData(params){
        return sendPostRequest('/captcha/verify?phone='+params.phone+'&captcha='+params.captcha+'' , params)
    },
    // 获取登录状态
    dengLuData(params){
        return sendPostRequest('/login/status' , params)
    },
    // 刷新登录状态
    zhuangtaiData(params){
         return sendPostRequest('/login/refresh',params)
    },
    //  获取热门歌单分类
      hotListData(params){
          return sendPostRequest('/playlist/hot',params)
      },
    //   推荐歌单
    tuiJianData(params){
        return sendPostRequest('/personalized',params)
    },
    // 排行榜详情
    paiHangData(params){
        return sendPostRequest('/toplist/detail' ,params)
    },
    // 获取歌单详情
    huoQugedanData(url,params){
        return sendPostRequest(url,params)
    },
    // 获取音乐url
    obtainMusicData(url, params){
        return sendPostRequest(url,params)
    },
    // 热门歌单分类
    hotGeDanData(url , params){
        return sendPostRequest(url , params)
    },
    // 网友推荐歌单分类 
    tuiJianGeDanData(url , params){
        return sendPostRequest(url , params)
    },
    // 获取用户歌单收藏等
    yongHuData(url,params){
        return sendPostRequest(url, params)
    },
    // 获取最近听歌记录
    zuijinData(url , params){
       return sendPostRequest(url , params)
    }
    
}