from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('page_image_sem_menu.html')

if __name__ == '__main__':
    app.run(debug=True)