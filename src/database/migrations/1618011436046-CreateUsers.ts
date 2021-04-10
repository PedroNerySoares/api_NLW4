import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1618011436046 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table  ({
                name:"users",
                columns:[
                    {
                        name:"id",
                        type:"uui",
                        isPrimary:true
                    },
                    {
                        name:"name",
                        type:"varchar",
                    },
                    {
                        name:"email",
                        type:"varchar",
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"

                    },
                ]
            }
        )
    )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}

