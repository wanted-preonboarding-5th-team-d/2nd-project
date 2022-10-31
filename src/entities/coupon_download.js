const EntitySchema = require("typeorm").EntitySchema; 

module.exports = new EntitySchema({
    name: "coupon_downloads",
    tableName: "coupon_download",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        coupon_id: {
            type: "int",
            nullable: false
        },
        code: {
            type: "varchar",
            nullable: false
        },
        is_used: {
            type: "int",
            nullable: false
        },
        downloaded_at: {
            type: "timestamp",
            default: () => 'CURRENT_TIMESTAMP',
        }
    },
    relations: {
        coupons: {
            type: 'many-to-one',
            target: 'coupon',
            joinColumn: {
                name: 'coupon_id',
            }
        }
    },
});