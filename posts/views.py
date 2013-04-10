# Create your views here.
import posts
from django.http import HttpResponse, HttpRequest

from django.shortcuts import render_to_response

def home(request):
	
	response = posts.models.Post.objects.all();
	try:
		debug = request.GET['debug']
		debug = "debug"
	except:
		debug = ""

	c = {
		"posts": response,
		"debug": debug
	}
			
	return render_to_response('show.html', c)


def post(slug, request):
	c = {
		"posts": posts.models.Post.filter(slug=slug)
	}
	return render_to_response('post.html', c)