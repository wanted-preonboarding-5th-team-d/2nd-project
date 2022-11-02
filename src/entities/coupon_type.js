const EntitySchema = require("typeorm").EntitySchema; 

module.exports = new EntitySchema({
    name: "coupon_types",
    tableName: "coupon_type",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        type: {
            type: "varchar",
            nullable: false
        }
    },
});