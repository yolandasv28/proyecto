export var cliente_model = (sequelize:any, type:any)=>{
    let ClienteModel =  sequelize.define('t_cliente',{
        cli_id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        cli_nom:
        {
            type: type.STRING(50),
            allowNull: true,
            defaultValue: "sin nombre"
        },
        cli_ape:
        {
            type: type.STRING(50),
            allowNull: true,
            defaultValue: "sin apellido"
        },
        
        cli_tel:
        {
            type: type.STRING(45),
            allowNull: true,
            defaultValue: "000000"
        },
        cli_dni:
        {
            type: type.STRING(45),
            allowNull: true,
            defaultValue: "00000000"
        },
        cli_fech:
        {
            type: type.DATE,
            allowNull: true,
            defaultValue: new Date()
        },
    },
    {        
        timestamps: true,
        tableName:'t_cliente'
    });

    ClienteModel.prototype.saludar = function(){
        console.log(this.cli_nom + " te saluda");
    }

    return ClienteModel;
};




