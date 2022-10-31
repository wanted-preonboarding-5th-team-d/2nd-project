const EntitySchema = require("typeorm").EntitySchema; 

module.exports = new EntitySchema({
    name: "coupons",
    tableName: "coupon",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        coupon_type_id: {
            type: "int",
            nullable: false
        },
        discount: {
            type: "decimal",
            nullable: false
        },
        created_at: {
            type: "timestamp",
            default: () => 'CURRENT_TIMESTAMP',
        },
        updated_at: {
            type: "timestamp",
            nullable: true,
            onUpdate: 'CURRENT_TIMESTAMP'
        }
    },
    relations: {
        coupon_types: {
            type: 'many-to-one',
            target: 'coupon_type',
            joinColumn: {
                name: 'coupon_type_id',
            }
        }
    },
});