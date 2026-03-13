import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

const Filedata = sequelize.define('Filedata', {
    filename: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

export default Filedata;