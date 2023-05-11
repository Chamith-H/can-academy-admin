let categories = [''];
let subcategories = [''];

class Dynamics {
    set_Categories(data) {
        categories = data;
    }

    set_Subcategories(data) {
        subcategories = data;
    }

    fetch_Categories() {
        return categories;
    }

    fetch_Subcategories() {
        return subcategories;
    }
}

export default Dynamics;