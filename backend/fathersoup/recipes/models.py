from django.db import models

class Category(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.title
    
class Recipe(models.Model):
    title = models.CharField(max_length=200)
    category = models.ForeignKey(
        Category,
        related_name='recipes',
        on_delete=models.CASCADE
    )
    description = models.TextField(blank=True)

    def __str__(self):
        return self.title