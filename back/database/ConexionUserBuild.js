const mysql = require('mysql2');
require('dotenv').config()

/**
 * En esta clase encapsularemos la comunicación con la base de datos.
 */
class Conexion {

    constructor(options) {
        this.connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DEV,
            port: process.env.DB_PORT
        });
    }
 
    
    conectar = () => {
        this.connection.connect( (err) => {
            if (err) {
                console.error('Error de conexion: ' + err.stack);
                return;
            }
            console.log('Conectado con el identificador ' + this.connection.threadId);
        });
    }

    desconectar = () => {
        this.connection.end( (err) => {
            if (err) {
                console.error('Error de conexion: ' + err.stack);
                return;
            }
        console.log('Desconectado con éxito');
        });
    }


    query = ( sql, values ) => {
    //Devolver una promesa
    //console.log(sql + values);
    return new Promise(( resolve, reject ) => {
        this.connection.query(sql, values, ( err, rows) => {
            if ( err ) {
                reject( err )
            } else {
                if (rows.length === 0) {
                    reject(err);
                }
                resolve( rows )
            }
            })
        })
    }

    getUserByEmail = async(email) => {
        let resultado = [];
        this.conectar();
        try {
            resultado = await this.query('SELECT * FROM users WHERE email = ?', [email]);
            console.log(resultado)
            this.desconectar();
        } catch (error) {
            this.desconectar();
            throw error;
        }
        return resultado;
    }
    
}

module.exports = Conexion;
