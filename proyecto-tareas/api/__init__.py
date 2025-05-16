from flask import Flask, request
from api.conexion import Query
from flask_cors import CORS

def create_app():
    app = Flask(__name__)

    #CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})  # Aquí agregamos CORS para solo permitir desde tu frontend
    # esta es una forma
    ipHosting = "http://127.0.0.1:8000"
    apiOrigin = "http://localhost:5173"
    app.config.from_mapping(
        DEBUG = True,
        SECRET_KEY = 'JC24axby',
        SERVER_API = ipHosting,
        PUERTOAPP = 8000
    )

    CORS(app, resources={r"/*": {"origins": apiOrigin}})

    @app.route('/api')
    def index():
        return "HOLA AQUI ESTA FUNCIONANDO TU APIREST...."
    
    # CONSULTAS
    @app.route('/consult')
    def listar():
        sql = "SELECT * FROM Tareas"
        l = Query()
        x = l.EjecutarQuery(sql)
        return x, {'Access-Control-Allow-Origin':'*'}
    
    @app.route('/listor', methods=['GET'])
    def listarOrden():
        sql = "SELECT * FROM tareas ORDER BY orden ASC"
        l = Query()
        x = l.EjecutarQuery(sql)
        return x, {'Access-Control-Allow-Origin':'*'}

    @app.route('/orden', methods=['POST'])
    def ordenar():
        data = request.get_json()
        orden = data['orden']
        print("Datos recibidos:", data)
        try:
            # Recorrer el array para tener el id y el orden
            for index, id_tarea in enumerate(orden, start=1):
                tare_id = int(id_tarea)
                sql = 'UPDATE Tareas SET Orden = ? WHERE ID_Tarea = ?'
                # Actualizar el numero_orden en la base de datos
                l = Query()
                l.Ejecutar(sql, index, tare_id)
                print(f"Actualizando ID: {tare_id} con Orden: {index}")
            
            return {'message': 'Orden actualizado correctamente'}, 200
        except Exception as e:
            print(f"Error al actualizar el orden: {e}")
            return {'error': 'Error al actualizar el orden'}, 500
        
    @app.route('/con/<id>')
    def listaId(id):
        a = f'SELECT * FROM Tareas WHERE ID_Tarea="{id}"'
        sql= a
        f = Query()
        x = f.EjecutarUno(sql)
        return x, {'Access-Control-Allow-Origin':'*'}

    @app.route('/in', methods=['POST'])
    def addTarea():
        data=request.get_json()
        Tarea = data['tarea']
        peticion = f'INSERT INTO Tareas VALUES (NULL, "{Tarea}", 0, 0)'
        sql = peticion
        r = Query()
        r.Ejecutar(sql)
        # 2. Obtener el último ID insertado
        last_id = r.Ejecutar('SELECT last_insert_rowid()')[0][0] 
        # last_insert_rowid() es una función de SQLite que devuelve el último ID insertado en la tabla
        # 3. Usar ese ID para actualizar numero_orden
        update_sql = f'UPDATE Tareas SET numero_orden = {last_id} WHERE id = {last_id}'
        result = r.Ejecutar(update_sql)
        return result
    
    @app.route('/upd/<id>', methods=['PUT'])
    #@CORS(origins=apiOrigin)
    def updateTarea(id):
        request_data = request.get_json()
        estado_nuevo = request_data.get('Estado')
        sql = f"UPDATE Tareas SET Estado='{estado_nuevo}' WHERE ID_Tarea={id}"
        f = Query()
        x = f.Ejecutar(sql)
        print(x)
        return x

    @app.route('/del/<id>', methods=['DELETE'])
    def deleteTarea(id):
        sql = f'DELETE FROM Tareas WHERE ID_Tarea={id}'
        r = Query()
        result = r.Ejecutar(sql)
        return result

    #return x, {'Access-Control-Allow-Origin':'*'}
    return app