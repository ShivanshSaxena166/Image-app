import axios from 'axios'
export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers:{
        Authorization:'Client-ID O2Fs_p35SpnZvx7sp_TYC4rUPm1ZbGOmWI3zuOTGnz4'
    }
})