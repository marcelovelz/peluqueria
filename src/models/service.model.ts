import {
    Table,
    Model,
    Column,
    DataType,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';
import Appointment from './appoinment.model';

@Table({
    timestamps: true,
    tableName: 'services',
})
class Service extends Model {
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
    description!: string;

    @ForeignKey(() => Appointment)
    @Column({
        type: DataType.INTEGER.UNSIGNED,
        allowNull: false,
    })
    appointmentId!: number;

    @BelongsTo(() => Appointment)
    appointment!: Appointment;
}

export default Service;
