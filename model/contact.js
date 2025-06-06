const Contact = sequelize.define(
  "contacts",
  {
    contactId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    inquiryType: {
      type: DataTypes.ENUM(
        "Product Inquiry",
        "Order Support",
        "#BADLAV Movement"
      ),
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "contacts",
  }
);

module.exports = Contact;
