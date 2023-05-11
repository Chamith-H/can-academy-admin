import React, { Component } from "react";
import Axios from "axios";

class Api extends Component {
    server = 'http://192.168.8.182:8000';

    //Categories APIs
    add_Category(data) {  //Add a new category
        const _api = '/addCategory';
        return Axios.post(this.server + _api, data)
    }

    get_Categories() {  //Get all categories
        const _api = '/getCategories';
        return Axios.get(this.server + _api)
    }

    add_SubCategory(data) {  //Add a new category
        const _api = '/addSubCategory';
        return Axios.post(this.server + _api, data)
    }

    get_SubCategories() {  //Get all categories
        const _api = '/getSubCategories';
        return Axios.get(this.server + _api)
    }
}

export default Api;