from flask import Flask

app = Flask(__name__)

@app.route('/saludo/<Valentin>')
def saludar(Valentin):
    return f'Hola {Valentin}'

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000)