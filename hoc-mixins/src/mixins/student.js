export default {
    data() { // data() tra ve mot doi tuong, hien thi ra giao dien
        return {
            name: "Nguyen Van 10",
            age: 21
        }
    },
    methods: { // xu ly cac ham
        getInfo() {
            return this.name + "-" + this.age
        }
    }
}