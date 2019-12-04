import axios from 'axios';


// 获取每日推荐视频列表
export const getTodayVideo = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://api.apiopen.top/todayVideo').then(res => {
            if (res && res.data && res.data.code == 200) {
                resolve(res.data.result); 
            } else {
                reject({
                    code: res.data.code,
                    msg: res.data.message
                });
            }
            console.log(res);
        }).catch(err => {
            console.log('获取每日视频列表出错', err);
        });
    })
}