from django.db import models

# Create your models here.
class Keyword(models.Model):
	keyword = models.CharField("Keyword", max_length=20)
	description = models.TextField("Post Content", blank=True)
	createDate = models.DateTimeField('Created', auto_now_add=True)
	updateDate = models.DateTimeField('Updated', auto_now=True)

	def __unicode__(self):
	    return self.keyword 
	    
class Post(models.Model):
	title = models.CharField("Post Title", blank=True, max_length=100)
	slug = models.SlugField("Post Slug", blank=True, max_length=100)
	keywords = models.ManyToManyField(Keyword)
	excerpt = models.TextField("Post Excerpt", blank=True)
	thumbnail = models.ImageField("Thumbnail", upload_to="uploads/")
	content = models.TextField("Post Content", blank=True)
	addon = models.TextField("Post Addon HTML", blank=True)
	template = models.CharField(choices=(("top", "Content Top"), ("left", "Content Left"), ("bottom", "Content Bottom"), ("right", "Content Right")), max_length=50)
	contentWidth = models.IntegerField("Content Width")
	createDate = models.DateTimeField('Created', auto_now_add=True, editable=True)
	updateDate = models.DateTimeField('Updated', auto_now=True)
	publishDate = models.DateTimeField('Published')

	def __unicode__(self):
	    return self.title 

class Mod(models.Model):
	post = models.ForeignKey(Post)
	attribute = models.CharField("Attribute", choices=(("rotate", "Rotate"), ("rotate-x", "Rotate X"), ("rotate-y", "Rotate Y"), ("scale", "Scale"), ("x", "X"), ("y", "Y")), max_length=50)
	value = models.CharField("Value", max_length=20)
	
	def __unicode__(self):
		return self.attribute