import app from './app';

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), () => {
    console.log(`Listening: http://localhost:${app.get('port')}`);
});