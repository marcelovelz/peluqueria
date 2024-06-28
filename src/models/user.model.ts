import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
    timestamps: true,
    tableName: 'users',
})
class User extends Model {
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    username!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    role!: string;
}

export default User;
