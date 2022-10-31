const EntitySchema = require("typeorm").EntitySchema; 

module.exports = new EntitySchema({
    name: "delivery_costs",
    tableName: "delivery_cost",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        quantity_range_id: {
            type: "int",
            nullable: false
        },
        country_idx: {
            type: "int",
            nullable: false
        },
        price: {
            type: "decimal",
            nullable: false
        }
    },
    relations: {
        quantity_ranges: {
            type: 'many-to-one',
            target: 'quantity_range',
            joinColumn: {
                name: 'id',
            }
        }
    },
});