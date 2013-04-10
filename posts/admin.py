from posts.models import Post, Keyword, Mod
from django.contrib.auth.models import User
from django.contrib import admin
    
class ModInline(admin.TabularInline):
    model = Mod
    extra = 0

class PostAdmin(admin.ModelAdmin):
    inlines=[ModInline]

admin.site.register(Post, PostAdmin)
admin.site.register(Keyword)