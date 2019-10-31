import Api from './API'

export default {

    create(reg_data) {
        return Api().post('register', reg_data)
    }
}