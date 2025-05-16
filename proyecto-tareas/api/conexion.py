import sqlite3
import json

class Query:
    def __init__(self):
        self.con = None
        self.cursor = None

    def database(self):
        con = sqlite3.connect("api/Datos.db")
        self.con = con
        return con
    
    def conexion(self):
        con = self.database()
        cur = con.cursor()
        return cur
    
    def close(self):
        # Cerrar cursor y conexión
        if self.con:
            self.con.close()

    #query para agregar actualizar o elimitar! 
    # def Ejecutar(self,sql): 
    #     db = self.database()
    #     cursor = db.cursor()
    #     cursor.execute(sql)
    #     db.commit()
    #     self.close()
    #     return json.dumps("200")

    # query para consultar varios
    def EjecutarQuery(self, sql):
        cursor = self.conexion()
        cursor.execute(sql)
        row=cursor.fetchall()
        self.close()
        return json.dumps(row)

    def Ejecutar(self, sql, *params): 
        db = self.database()
        cursor = db.cursor()
        try:
            if params:
                cursor.execute(sql, params)
            else:
                cursor.execute(sql)
            db.commit()
            return json.dumps("200")
        except Exception as e:
            print(f"Error al ejecutar SQL: {e}")
            db.rollback()
            return json.dumps("500")
        finally:
            cursor.close()
            self.close()
    
    # query para consultar uno
    def EjecutarUno(self, sql):
        cursor = self.conexion()
        cursor.execute(sql)
        row=cursor.fetchone()
        self.close()
        return json.dumps(row)
    