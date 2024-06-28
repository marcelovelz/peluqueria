import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript';
import Appointment from './appoinment.model';

@Table({
    timestamps: true,
    tableName: 'clients',
})
class Client extends Model {
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    identificationNumber!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    lastName!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    email!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    phone!: string;

    @HasMany(() => Appointment)
    appointments!: Appointment[];
}

export default Client;
