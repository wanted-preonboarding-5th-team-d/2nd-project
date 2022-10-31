const EntitySchema = require("typeorm").EntitySchema; 

module.exports = new EntitySchema({
    name: "orders",
    tableName: "order",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        quantity_id: {
            type: "int",
            nullable: false,
        },
        price: {
            type: "decimal",
            nullable: false,
        },
        buyer_name: {
            type: "varchar",
            nullable: false,
        },
        buyer_city: {
            type: "varchar",
            nullable: false,
        },
        coupon_id: {
            type: "int",
            nullable: false
        },
        country_code_id: {
            type: "int",
            nullable: false,
        },
        buyer_zipx: {
            type: "varchar",
            nullable: false,
        },
        vccode: {
            type: "int",
            nullable: false,
        },
        delivery_num: {
            type: "varchar",
            nullable: false,
        },
        delivery_status: {
            type: "int",
            nullable: false,
        },
        discount_price : {
            type : "decimal",
            nullable : true
        },
        order_date: {
            type: "timestamp",
            default: () => 'CURRENT_TIMESTAMP',
        },
        payment_state: {
            type: "int",
            nullable: false,
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
        quantities: {
            type: 'many-to-one',
            target: 'quantity',
            joinColumn: {
                name: 'quantity_id',
            }
        },
        country_codes: {
            type: 'many-to-one',
            target: 'country_code',
            joinColumn: {
                name: 'country_code_id',
            }
        },
        coupons: {
            type: 'many-to-one',
            target: 'coupon',
            joinColumn: {
                name: 'coupon_id',
            }
        }
    },
});