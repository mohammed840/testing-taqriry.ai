from flask import Flask, render_template, request, make_response, redirect, url_for

app = Flask(__name__)

# Home page with language preference
@app.route('/')
def home():
    language = request.cookies.get('language', 'en')  # Default to 'en' if cookie is not set
    return render_template('index.html', language=language)

# Set language preference route
@app.route('/set_language/<lang>')
def set_language(lang):
    resp = make_response(redirect(url_for('home')))
    resp.set_cookie('language', lang, max_age=31536000)  # 1 year
    return resp

@app.route('/apps')
def apps():
    language = request.cookies.get('language', 'en')
    return render_template('apps.html', language=language)

@app.route('/pricing')
def pricing():
    language = request.cookies.get('language', 'en')
    return render_template('pricing.html', language=language)

@app.route('/ForBusniness')
def ForBusniness():
    language = request.cookies.get('language', 'en')
    return render_template('ForBusniness.html', language=language)

@app.route('/forsales')
def forsales():
    language = request.cookies.get('language', 'en')
    return render_template('forsales.html', language=language)

@app.route('/education')
def education():
    language = request.cookies.get('language', 'en')
    return render_template('education.html', language=language)

@app.route('/media')
def media():
    language = request.cookies.get('language', 'en')
    return render_template('media.html', language=language)

@app.route('/schedule_demo')
def schedule_demo():
    language = request.cookies.get('language', 'en')
    return render_template('Schedule_Demo.html', language=language)



@app.route('/solutions')
def solutions():
    language = request.cookies.get('language', 'en')
    return render_template('solutions.html', language=language)

@app.route('/comingsoon')
def coming_soon():
    language = request.cookies.get('language', 'en')
    return render_template('comingsoon.html', language=language)

if __name__ == '__main__':
    app.run(debug=True)
