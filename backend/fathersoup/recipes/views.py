# recipes/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Category, Recipe
from .serializers import CategorySerializer, RecipeSerializer
from rest_framework.generics import RetrieveAPIView, ListAPIView

class CategoryListView(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

class CategoryDetailView(RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = 'slug'

class CategoryRecipesView(ListAPIView):
    serializer_class = RecipeSerializer

    def get_queryset(self):
        slug = self.kwargs['slug']
        return Recipe.objects.filter(category__slug=slug)