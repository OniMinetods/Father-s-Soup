# recipes/serializers.py
from rest_framework import serializers
from .models import Category, Recipe

class CategorySerializer(serializers.ModelSerializer):
    recipes_count = serializers.IntegerField(source='recipes.count', read_only=True)

    class Meta:
        model = Category
        fields = [
            'id',
            'title',
            'slug',
            'recipes_count',
        ]

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ('id', 'title', 'description')