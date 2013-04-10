from django import template

register = template.Library()

@register.filter(name='diff')
def cut(value, arg):
    return (arg-value)