DEFAULT_FILE_STORAGE = False
STATICFILES_STORAGE = False

# These are the development settings
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3', # Add 'postgresql_psycopg2', 'mysql', 'sqlite3' or 'oracle'.
        'NAME': 'radsub.db',                      # Or path to database file if using sqlite3.
        'USER': '',                      # Not used with sqlite3.
        'PASSWORD': '',                  # Not used with sqlite3.
        'HOST': '',                      # Set to empty string for localhost. Not used with sqlite3.
        'PORT': '',                      # Set to empty string for default. Not used with sqlite3.
    }
}

MEDIA_URL = 'http://localhost/personal/radsubapp/radsub/uploads/'
STATIC_URL = 'http://localhost/personal/radsubapp/radsub/media/'