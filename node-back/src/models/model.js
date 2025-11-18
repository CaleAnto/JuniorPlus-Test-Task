module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'notes',
    timestamps: true
  });

  return Note;
};
