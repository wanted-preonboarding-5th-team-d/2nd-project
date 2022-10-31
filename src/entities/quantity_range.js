const EntitySchema = require("typeorm").EntitySchema; 

module.exports = new EntitySchema({
    name: "quantity_ranges",
    tableName: "quantity_range",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        quantity_min: {
            type: "int",
            nullable: false
        },
        quantity_max: {
            type: "int",
            nullable: false
        },
        country_idx: {
            type: "int",
            nullable: false
        }
    },
});