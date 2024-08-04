from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/page_audio')
def page_audio():
    return render_template('page_audio_sem_menu.html')

@app.route('/page_image')
def page_image():
    return render_template('page_image_sem_menu.html')

if __name__ == '__main__':
    app.run(debug=True)
