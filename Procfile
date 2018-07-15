web: gunicorn todolist.wsgi --limit-request-line 8188 --log-file -
worker: celery worker --app=todolist --loglevel=info
