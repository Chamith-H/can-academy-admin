let categories = [''];
let subcategories = [''];
let courses = [''];

class Dynamics {

    // Setters ----------------------------------------------->
    set_Categories(data) {
        categories = data;
    }

    set_Subcategories(data) {
        subcategories = data;
    }

    set_Courses(data) {
        courses = data;
    }


    // Getters ----------------------------------------------->
    fetch_Categories() {
        return categories;
    }

    fetch_Subcategories() {
        return subcategories;
    }

    fetch_Courses() {
        return courses;
    }
}

export default Dynamics;