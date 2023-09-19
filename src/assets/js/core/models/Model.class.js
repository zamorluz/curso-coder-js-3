class Model {
    constructor(properties) {
        this.properties = properties;
    }
    static find(id) {

        let model = Model()
    }
    setToLocal(){
        let key = this.properties
        __localStorage(this)
    }
    
}