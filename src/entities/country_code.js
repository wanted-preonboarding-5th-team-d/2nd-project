const EntitySchema = require("typeorm").EntitySchema; 

module.exports = new EntitySchema({
    name: "country_codes",
    tableName: "country_code",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        country_code: {
            type: "varchar",
            nullable: false
        },
        country_dcode: {
            type: "varchar",
            nullable: false
        },
        country_name: {
            type: "varchar",
            nullable: false
        }
    },
});