# recipes/urls.py
from django.urls import path
from .views import CategoryListView, CategoryDetailView, CategoryRecipesView

urlpatterns = [
    path('categories/', CategoryListView.as_view()),
    path('categories/<slug:slug>/', CategoryDetailView.as_view()),
    path('categories/<slug:slug>/recipes/', CategoryRecipesView.as_view()),
]
