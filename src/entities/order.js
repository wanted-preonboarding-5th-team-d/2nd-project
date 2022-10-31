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
        Date: {
            type: "int",
            nullable: false,
        },
        pay_state: {
            type: "varchar",
            nullable: false,
        },
        quantity_id: {
            type: "int",
            nullable: false,
        },
        price: {
            type: "decimal", precision: 10, scale: 2 ,
            nullable: false,
        },
        buyr_city: {
            type: "varchar",
            nullable: false,
        },
        buyr_country: {
            type: "varchar",
            nullable: false,
        },
        buyer_name: {
            type: "varchar",
            nullable: true,
        },
        buyr_zipx: {
            type: "varchar",
            nullable: true,
        },
        vccode: {
            type: "varchar",
            nullable: false,
        },
        delivery_num: {
            type: "varchar",
            nullable: false,
        },
        coupon_id: {
            type: "int",
            nullable: true,
        },
        delivery_status: {
            type: "varchar",
            nullable: true,
        },
        discount_price : {
            type : "decimal", precision: 10, scale: 2 ,
            nullable : true
        },
        order_date: {
            type: "timestamp",
            default: () => 'CURRENT_TIMESTAMP',
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
        coupon_downloads: {
            type: 'one-to-one',
            target: 'coupon_download',
            joinColumn: {
                name: 'coupon_id',
            }
        }
    },
});