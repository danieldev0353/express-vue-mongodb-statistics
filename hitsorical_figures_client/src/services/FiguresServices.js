const baseUrl = 'http://localhost:300/api/figures'

export default{

    getFigures(){
        return fetch(baseUrl)
        .then(res => res.json())
    }

    



}