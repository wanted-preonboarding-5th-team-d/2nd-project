const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "quantities",
    tableName: "quantity",
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
        quantity: {
            type: "int",
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