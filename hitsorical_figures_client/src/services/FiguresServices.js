const baseUrl = 'http://localhost:3000/api/historical_figures'

export default{

    getFigures(){
        return fetch(baseUrl)
        .then(res => res.json())
    }

    



}