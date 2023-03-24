from django.urls import path
from . import views

urlpatterns = [
    #path("",views.index, name="index"),
    path("vishesh",views.vishesh, name="Vishesh"),
    #path("<str:name>",views.helloName1, name="Hello Name 1"),
    path("",views.hello, name="Hello"),
    path("<str:name>",views.helloName2, name="Hello Name 2"),


]