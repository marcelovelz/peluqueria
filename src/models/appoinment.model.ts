import {
    Table,
    Model,
    Column,
    DataType,
    ForeignKey,
    BelongsTo,
    HasMany,
} from 'sequelize-typescript';
import Client from './client.model';
import Service from './service.model';

@Table({
    timestamps: true,
    tableName: 'appointments',
})
class Appointment extends Model {
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    })
    id!: number;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    date!: Date;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    })
    isActive!: boolean;

    @ForeignKey(() => Client)
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false,
    })
    clientId!: number;

    @BelongsTo(() => Client)
    client!: Client;

    @HasMany(() => Service)
    services!: Service[];
}

export default Appointment;
